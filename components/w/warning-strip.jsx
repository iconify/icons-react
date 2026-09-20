import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4-z48bjf.css';
import '../../css/h/hua-a9bjv.css';
import '../../css/n/nr0sg1b4q.css';
import '../../css/y/y85-cbbqp.css';
import '../../css/c/cd7p0qbfp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4-z48bjf"/><path class="hua-a9bjv"/><path class="nr0sg1b4q"/><path class="y85-cbbqp"/><path class="cd7p0qbfp"/>`,
		"fallback": "openmoji:warning-strip",
	});
}

export default Component;
