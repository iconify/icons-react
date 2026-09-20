import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znayi4bdb.css';
import '../../css/g/g8dz_qbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znayi4bdb"/><path class="g8dz_qbsy"/>`,
		"fallback": "uim:sign-out",
	});
}

export default Component;
