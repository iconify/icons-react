import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1uqjgb2i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v1uqjgb2i"/>`,
		"fallback": "healthicons:thermometer2x-outline",
	});
}

export default Component;
