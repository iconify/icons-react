import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfhurn1ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfhurn1ro"/>`,
		"fallback": "vadivam:user-star",
	});
}

export default Component;
