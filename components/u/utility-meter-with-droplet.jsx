import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsqhrhbep.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsqhrhbep"/>`,
		"fallback": "pinhead:utility-meter-with-droplet",
	});
}

export default Component;
