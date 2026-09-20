import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ndmlpoh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ndmlpoh"/>`,
		"fallback": "pinhead:tired-face-with-oral-thermometer-and-brow-sweat-in-circle",
	});
}

export default Component;
