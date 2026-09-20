import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3s-vtbjn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3s-vtbjn"/>`,
		"fallback": "pinhead:syrup-jug-with-sugarcane-stalk-with-leaves",
	});
}

export default Component;
