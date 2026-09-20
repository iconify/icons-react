import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in25xxb2m.css';
import '../../css/t/tut9p6mey.css';
import '../../css/j/j0-ahn93p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in25xxb2m"/><path class="tut9p6mey"/><path class="j0-ahn93p"/>`,
		"fallback": "streamline-freehand:presentation-board-graph",
	});
}

export default Component;
