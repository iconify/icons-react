import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awjitp7ft.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awjitp7ft"/>`,
		"fallback": "streamline-flex:line-arrow-rotate-right-circle-remix",
	});
}

export default Component;
