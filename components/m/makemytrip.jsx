import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7dbbrb5t.css';
import '../../css/h/hp-202bvr.css';
import '../../css/r/rg72-z8_x.css';

const viewBox = {"width":1558,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7dbbrb5t"/><path class="hp-202bvr"/><path class="rg72-z8_x"/>`,
		"fallback": "thesvg-color:makemytrip",
	});
}

export default Component;
