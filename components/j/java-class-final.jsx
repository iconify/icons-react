import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v211lxpnr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v211lxpnr"/>`,
		"fallback": "catppuccin:java-class-final",
	});
}

export default Component;
