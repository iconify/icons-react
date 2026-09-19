import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjwn2c9cf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjwn2c9cf"/>`,
		"fallback": "game-icons:shower",
	});
}

export default Component;
