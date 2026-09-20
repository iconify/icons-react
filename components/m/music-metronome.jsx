import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/on_v-m3kl.css';
import '../../css/o/ok4fiu4ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="on_v-m3kl"/><path class="ok4fiu4ju"/></g>`,
		"fallback": "streamline-freehand-color:music-metronome",
	});
}

export default Component;
