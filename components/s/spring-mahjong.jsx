import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8i2bfk9v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8i2bfk9v"/>`,
		"fallback": "dinkie-icons:spring-mahjong",
	});
}

export default Component;
