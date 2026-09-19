import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkgu-nbob.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkgu-nbob"/>`,
		"fallback": "f7:shield-slash",
	});
}

export default Component;
