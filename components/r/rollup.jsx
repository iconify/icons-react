import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgnghdc0b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgnghdc0b"/>`,
		"fallback": "devicon-plain:rollup",
	});
}

export default Component;
