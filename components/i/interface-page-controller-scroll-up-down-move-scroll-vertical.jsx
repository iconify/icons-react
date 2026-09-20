import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyc4jq30b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyc4jq30b"/>`,
		"fallback": "streamline:interface-page-controller-scroll-up-down-move-scroll-vertical",
	});
}

export default Component;
