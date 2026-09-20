import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3gl5vbsx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3gl5vbsx"/>`,
		"fallback": "streamline:interface-edit-drawing-board-board-design-drawing-easel-process",
	});
}

export default Component;
