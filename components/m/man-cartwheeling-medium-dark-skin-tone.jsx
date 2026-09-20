import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eztqw9biy.css';
import '../../css/k/k-6wvukge.css';
import '../../css/c/c30ngsbte.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/d/d0fw57ehj.css';
import '../../css/u/uey6unb3w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eztqw9biy"><circle class="k-6wvukge"/><path class="c30ngsbte"/></g><g class="brzn_0bpr"><circle class="d0fw57ehj"/><path class="uey6unb3w"/></g>`,
		"fallback": "openmoji:man-cartwheeling-medium-dark-skin-tone",
	});
}

export default Component;
