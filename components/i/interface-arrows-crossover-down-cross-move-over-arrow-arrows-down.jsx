import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9s90sbkm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9s90sbkm"/>`,
		"fallback": "streamline:interface-arrows-crossover-down-cross-move-over-arrow-arrows-down",
	});
}

export default Component;
