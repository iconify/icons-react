import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj1ehrbwp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj1ehrbwp"/>`,
		"fallback": "dinkie-icons:translate-cyrillic-latin",
	});
}

export default Component;
