import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hee5pyz_a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hee5pyz_a"/>`,
		"fallback": "la:sms",
	});
}

export default Component;
