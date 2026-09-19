import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6tswxbar.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6tswxbar"/>`,
		"fallback": "dinkie-icons:plum-mahjong",
	});
}

export default Component;
