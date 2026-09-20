import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrk48pbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrk48pbrp"/>`,
		"fallback": "thesvg-color:movistar",
	});
}

export default Component;
