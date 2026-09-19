import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv8sgnbtc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv8sgnbtc"/>`,
		"fallback": "dinkie-icons:party-popper",
	});
}

export default Component;
