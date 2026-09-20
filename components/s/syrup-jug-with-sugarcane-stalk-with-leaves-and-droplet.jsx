import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guokccb1x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guokccb1x"/>`,
		"fallback": "pinhead:syrup-jug-with-sugarcane-stalk-with-leaves-and-droplet",
	});
}

export default Component;
