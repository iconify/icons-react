import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnfx4bcxi.css';

const viewBox = {"width":769,"height":1537};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnfx4bcxi"/>`,
		"fallback": "wi:moon-6",
	});
}

export default Component;
