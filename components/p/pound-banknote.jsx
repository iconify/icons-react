import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtk6izbcm.css';
import '../../css/f/fpzub6a5l.css';
import '../../css/g/gioh9jbjj.css';
import '../../css/l/ltsbsuq_l.css';
import '../../css/n/nnxc3dbrb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gtk6izbcm"/><path class="fpzub6a5l"/><path class="gioh9jbjj"/><path class="ltsbsuq_l"/><path class="nnxc3dbrb"/></g>`,
		"fallback": "fluent-emoji-flat:pound-banknote",
	});
}

export default Component;
