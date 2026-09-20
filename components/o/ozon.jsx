import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtnow_b6w.css';

const viewBox = {"width":485,"height":106};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtnow_b6w"/>`,
		"fallback": "thesvg-color:ozon",
	});
}

export default Component;
