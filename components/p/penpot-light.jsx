import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn4siwm2r.css';

const viewBox = {"width":261.922,"height":345.941};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn4siwm2r"/>`,
		"fallback": "thesvg-color:penpot-light",
	});
}

export default Component;
