import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1yodib9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1yodib9f"/>`,
		"fallback": "icon-park-solid:triangle-round-rectangle",
	});
}

export default Component;
