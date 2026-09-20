import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i-k9h4bzq.css';
import '../../css/u/u64mz0bwh.css';
import '../../css/f/fyhqbw9pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i-k9h4bzq"/><path class="u64mz0bwh"/><path class="fyhqbw9pi"/></g>`,
		"fallback": "streamline-freehand-color:microprocessor-computer-chip-flash",
	});
}

export default Component;
