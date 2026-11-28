import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3s66abna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3s66abna"/>`,
		"fallback": "noviair-light:smartwatch-check",
	});
}

export default Component;
