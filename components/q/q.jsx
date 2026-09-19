import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xna4wac8g.css';

const viewBox = {"width":382,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xna4wac8g"/>`,
		"fallback": "file-icons:q",
	});
}

export default Component;
