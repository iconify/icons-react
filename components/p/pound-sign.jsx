import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqj_exb6z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqj_exb6z"/>`,
		"fallback": "la:pound-sign",
	});
}

export default Component;
