import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6dku23de.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6dku23de"/>`,
		"fallback": "pinhead:three-minus-over-water",
	});
}

export default Component;
