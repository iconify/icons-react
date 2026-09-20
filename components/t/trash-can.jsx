import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zur0szh7w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zur0szh7w"/>`,
		"fallback": "pinhead:trash-can",
	});
}

export default Component;
