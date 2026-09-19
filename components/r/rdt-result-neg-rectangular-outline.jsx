import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e20aw1nql.css';
import '../../css/q/qwf9izbqt.css';
import '../../css/c/c2968140u.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e20aw1nql"/><path clip-rule="evenodd" class="qwf9izbqt"/><path clip-rule="evenodd" class="c2968140u"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-neg-rectangular-outline",
	});
}

export default Component;
