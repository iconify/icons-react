import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2gdnob3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2gdnob3x"/>`,
		"fallback": "noviair-light:milk-x",
	});
}

export default Component;
