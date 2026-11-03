import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh5fhcc4z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh5fhcc4z"/>`,
		"fallback": "devicon:wakatime",
	});
}

export default Component;
