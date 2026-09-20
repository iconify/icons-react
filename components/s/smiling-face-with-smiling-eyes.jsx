import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/f/ff7mynj7b.css';
import '../../css/h/h3w_jji0j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><g class="z04drlb1l"><circle class="sgor8wbzm"/><path class="ff7mynj7b"/><path class="h3w_jji0j"/></g>`,
		"fallback": "openmoji:smiling-face-with-smiling-eyes",
	});
}

export default Component;
