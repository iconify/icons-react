import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9bwdn8yu.css';
import '../../css/u/u06779bpm.css';
import '../../css/c/cn03m5p3t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9bwdn8yu"/><path class="u06779bpm"/><path class="cn03m5p3t"/>`,
		"fallback": "openmoji:tooth",
	});
}

export default Component;
