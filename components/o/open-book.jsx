import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/s/sehu1gbpl.css';
import '../../css/j/jskuzhbxo.css';
import '../../css/c/cszouibee.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dqtkhyvdc.css';
import '../../css/e/eegfhb1gb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="sehu1gbpl"/><path class="jskuzhbxo"/><path class="cszouibee"/></g><g class="ij2x_72vy"><path class="dqtkhyvdc"/><path class="eegfhb1gb"/></g>`,
		"fallback": "openmoji:open-book",
	});
}

export default Component;
