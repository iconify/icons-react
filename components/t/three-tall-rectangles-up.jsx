import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etfx2dbzc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etfx2dbzc"/>`,
		"fallback": "pinhead:three-tall-rectangles-up",
	});
}

export default Component;
