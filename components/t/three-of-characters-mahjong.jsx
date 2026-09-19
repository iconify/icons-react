import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hurs0qbuc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hurs0qbuc"/>`,
		"fallback": "dinkie-icons:three-of-characters-mahjong",
	});
}

export default Component;
