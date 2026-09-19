import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpm5gpbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpm5gpbgs"/>`,
		"fallback": "griddy-icons:toothbrush-alt-filled",
	});
}

export default Component;
