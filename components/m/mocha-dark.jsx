import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hynasbbiy.css';

const viewBox = {"width":1920,"height":1084};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hynasbbiy"/>`,
		"fallback": "thesvg-color:mocha-dark",
	});
}

export default Component;
