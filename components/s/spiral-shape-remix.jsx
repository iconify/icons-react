import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpxq-4mas.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fpxq-4mas"/>`,
		"fallback": "streamline-flex:spiral-shape-remix",
	});
}

export default Component;
