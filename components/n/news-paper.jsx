import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpvh64iaj.css';
import '../../css/r/rwws3mbvu.css';
import '../../css/b/b4r24acop.css';
import '../../css/e/egxctib4b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tpvh64iaj"/><path class="rwws3mbvu"/><path class="b4r24acop"/><path class="egxctib4b"/></g>`,
		"fallback": "streamline-flex-color:news-paper",
	});
}

export default Component;
