import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqrfj76nr.css';
import '../../css/j/j_lztvbdd.css';
import '../../css/p/p3mle5ske.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqrfj76nr"/><path class="j_lztvbdd"/><path class="p3mle5ske"/>`,
		"fallback": "energy-icons:transition-piece-48",
	});
}

export default Component;
