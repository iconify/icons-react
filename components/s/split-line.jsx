import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj610ot7w.css';
import '../../css/u/up6p_bbnh.css';
import '../../css/e/et771ymsh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj610ot7w"/><path class="up6p_bbnh"/><path class="et771ymsh"/>`,
		"fallback": "gis:split-line",
	});
}

export default Component;
