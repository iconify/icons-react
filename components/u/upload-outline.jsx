import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krfr6wbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krfr6wbgk"/>`,
		"fallback": "typcn:upload-outline",
	});
}

export default Component;
