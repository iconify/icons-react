import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ukcnf_qtw.css';
import '../../css/e/em_s9edvt.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ukcnf_qtw"/><path class="em_s9edvt"/></g>`,
		"fallback": "si-glyph:shower",
	});
}

export default Component;
