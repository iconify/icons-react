import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzpyg8fjx.css';
import '../../css/f/fmfzdq6xq.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/s/sgeku9b-o.css';
import '../../css/e/eevyitx0o.css';
import '../../css/k/kr-2gnp6m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzpyg8fjx"/><path class="fmfzdq6xq"/><g class="doj9dq_jg"><path class="sgeku9b-o"/><path class="eevyitx0o"/><path class="kr-2gnp6m"/></g>`,
		"fallback": "openmoji:sun-behind-cloud",
	});
}

export default Component;
