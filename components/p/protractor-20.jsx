import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cugs406to.css';
import '../../css/z/zrzrd2cbc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cugs406to"/><path class="zrzrd2cbc"/>`,
		"fallback": "energy-icons:protractor-20",
	});
}

export default Component;
