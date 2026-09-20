import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kou7wacmp.css';
import '../../css/r/retrhhbob.css';
import '../../css/m/mu2cgibuj.css';
import '../../css/g/g2nr9ackb.css';
import '../../css/n/nmzrymigt.css';
import '../../css/m/mwh48pc5k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kou7wacmp"/><path class="retrhhbob"/><path class="mu2cgibuj"/><path class="g2nr9ackb"/><path class="nmzrymigt"/><path class="mwh48pc5k"/></g>`,
		"fallback": "unjs:ufo",
	});
}

export default Component;
