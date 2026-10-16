import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucme140zl.css';
import '../../css/m/mi8bjn4ds.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucme140zl"/><path class="mi8bjn4ds"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:tension-leg-20-bold",
	});
}

export default Component;
