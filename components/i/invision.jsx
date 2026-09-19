import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh1am04is.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh1am04is"/>`,
		"fallback": "fa7-brands:invision",
	});
}

export default Component;
