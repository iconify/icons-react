import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfar3hb-o.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfar3hb-o"/>`,
		"fallback": "fontisto:magnet",
	});
}

export default Component;
