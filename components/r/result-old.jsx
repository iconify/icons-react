import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkynldbkl.css';
import '../../css/y/y_r_lzbqt.css';
import '../../css/h/hislmmgbp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkynldbkl"/><path class="y_r_lzbqt"/><path class="hislmmgbp"/>`,
		"fallback": "carbon:result-old",
	});
}

export default Component;
