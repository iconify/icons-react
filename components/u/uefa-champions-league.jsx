import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drf92z_ie.css';

const viewBox = {"width":3307.488,"height":1461.757};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drf92z_ie"/>`,
		"fallback": "thesvg-color:uefa-champions-league",
	});
}

export default Component;
