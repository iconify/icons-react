import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btvzwg_0d.css';
import '../../css/f/f7-f7bvjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btvzwg_0d"/><path class="f7-f7bvjr"/>`,
		"fallback": "pixel:star-crescent",
	});
}

export default Component;
