import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj213obes.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj213obes"/>`,
		"fallback": "dinkie-icons:test-tube",
	});
}

export default Component;
