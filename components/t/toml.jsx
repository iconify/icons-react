import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhybq6bxs.css';
import '../../css/n/n5ithpbrj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhybq6bxs"/><path class="n5ithpbrj"/>`,
		"fallback": "devicon:toml",
	});
}

export default Component;
