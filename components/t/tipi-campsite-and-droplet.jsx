import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as3aqyb5d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as3aqyb5d"/>`,
		"fallback": "pinhead:tipi-campsite-and-droplet",
	});
}

export default Component;
