import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikzjngb9q.css';
import '../../css/l/lsvsa9b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikzjngb9q"/><path class="lsvsa9b8u"/>`,
		"fallback": "token:qlc",
	});
}

export default Component;
