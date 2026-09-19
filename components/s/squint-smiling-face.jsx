import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xug1g_b3t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xug1g_b3t"/>`,
		"fallback": "dinkie-icons:squint-smiling-face",
	});
}

export default Component;
