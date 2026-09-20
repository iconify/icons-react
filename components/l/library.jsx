import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h59o814uu.css';
import '../../css/l/l9_rs7bxk.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h59o814uu"/><path class="l9_rs7bxk"/>`,
		"fallback": "lineicons:library",
	});
}

export default Component;
