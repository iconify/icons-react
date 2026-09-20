import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4b7xbbez.css';

const viewBox = {"width":360,"height":90};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4b7xbbez"/>`,
		"fallback": "thesvg-color:morgan-stanley",
	});
}

export default Component;
