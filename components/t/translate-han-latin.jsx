import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy2e0xhtb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy2e0xhtb"/>`,
		"fallback": "dinkie-icons:translate-han-latin",
	});
}

export default Component;
