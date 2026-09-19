import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km4gd9p5a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km4gd9p5a"/>`,
		"fallback": "whh:pixeldagger",
	});
}

export default Component;
