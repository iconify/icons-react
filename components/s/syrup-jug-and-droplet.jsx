import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4e88rqbu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4e88rqbu"/>`,
		"fallback": "pinhead:syrup-jug-and-droplet",
	});
}

export default Component;
