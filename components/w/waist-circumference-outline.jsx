import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fedk4wb9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fedk4wb9a"/>`,
		"fallback": "healthicons:waist-circumference-outline",
	});
}

export default Component;
