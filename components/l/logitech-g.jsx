import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xub8gacdz.css';

const viewBox = {"width":0,"height":0,"left":-28.989,"top":-29};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xub8gacdz"/>`,
		"fallback": "thesvg-color:logitech-g",
	});
}

export default Component;
