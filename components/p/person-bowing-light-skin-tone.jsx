import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkoasrbaf.css';
import '../../css/y/y5decorob.css';
import '../../css/q/q4_961xem.css';
import '../../css/z/z04drlb1l.css';
import '../../css/a/azobf4b9h.css';
import '../../css/j/j3hoeozfo.css';
import '../../css/v/v6vmjt5rj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkoasrbaf"/><path class="y5decorob"/><path class="q4_961xem"/><g class="z04drlb1l"><path class="azobf4b9h"/><path class="j3hoeozfo"/><path class="v6vmjt5rj"/></g>`,
		"fallback": "openmoji:person-bowing-light-skin-tone",
	});
}

export default Component;
