import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/o/o3rhviknj.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/o/oteit1bml.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><g class="dcqdxh5zc"><path class="o3rhviknj"/><circle class="sgor8wbzm"/><path class="oteit1bml"/></g>`,
		"fallback": "openmoji:kissing-face-with-smiling-eyes",
	});
}

export default Component;
