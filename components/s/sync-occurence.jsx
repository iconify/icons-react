import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddy_x1bgb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddy_x1bgb"/>`,
		"fallback": "fluent-mdl2:sync-occurence",
	});
}

export default Component;
