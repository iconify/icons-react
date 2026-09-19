import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqwu_c0kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rqwu_c0kl"/>`,
		"fallback": "griddy-icons:png-file-filled",
	});
}

export default Component;
