import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu2o_0bsx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu2o_0bsx"/>`,
		"fallback": "la:running",
	});
}

export default Component;
