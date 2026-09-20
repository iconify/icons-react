import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0trzg1lf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0trzg1lf"/>`,
		"fallback": "streamline:interface-arrows-triangle-loop-diagram-triangle-loop-arrow-arrows",
	});
}

export default Component;
