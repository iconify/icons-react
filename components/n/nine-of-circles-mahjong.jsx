import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6wi8bbvm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6wi8bbvm"/>`,
		"fallback": "dinkie-icons:nine-of-circles-mahjong",
	});
}

export default Component;
