import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlbc19srw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlbc19srw"/>`,
		"fallback": "dinkie-icons:restroom",
	});
}

export default Component;
