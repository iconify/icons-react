import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et29cpbnk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et29cpbnk"/>`,
		"fallback": "selfhst:reactive-resume-dark",
	});
}

export default Component;
