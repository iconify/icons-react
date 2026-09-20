import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydv9klb5a.css';
import '../../css/s/sj9ntu5cy.css';
import '../../css/z/z6rvuwbez.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vdyr6jbwl.css';
import '../../css/q/qwbcv414l.css';
import '../../css/c/czm8rbclz.css';
import '../../css/e/enzu96b3l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydv9klb5a"/><path class="sj9ntu5cy"/><path class="z6rvuwbez"/><g class="jn8qy4bru"><path class="vdyr6jbwl"/><path class="qwbcv414l"/><path class="czm8rbclz"/><path class="enzu96b3l"/></g>`,
		"fallback": "openmoji:saline-drip",
	});
}

export default Component;
