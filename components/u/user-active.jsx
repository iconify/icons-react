import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohd3jjbmj.css';
import '../../css/h/hhno8jbwf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohd3jjbmj"/><circle class="hhno8jbwf"/>`,
		"fallback": "ooui:user-active",
	});
}

export default Component;
