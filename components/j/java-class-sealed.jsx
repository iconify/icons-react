import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/torn53bpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="torn53bpn"/>`,
		"fallback": "catppuccin:java-class-sealed",
	});
}

export default Component;
