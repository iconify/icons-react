import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig-cgx28a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig-cgx28a"/>`,
		"fallback": "fluent-mdl2:twelve-point-star",
	});
}

export default Component;
