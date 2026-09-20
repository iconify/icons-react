import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ya9q_jcjh.css';
import '../../css/f/fmvi8jhxb.css';
import '../../css/u/ud80dsbih.css';
import '../../css/m/mlr4gujwd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ya9q_jcjh"/><path class="fmvi8jhxb"/><path clip-rule="evenodd" class="ud80dsbih"/><path clip-rule="evenodd" class="mlr4gujwd"/></g>`,
		"fallback": "streamline-color:microscope-observation-sciene-flat",
	});
}

export default Component;
