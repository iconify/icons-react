import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjldgvq9y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjldgvq9y"/>`,
		"fallback": "pinhead:slide-and-droplet",
	});
}

export default Component;
