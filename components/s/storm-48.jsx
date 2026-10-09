import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyu8e9b8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyu8e9b8u"/>`,
		"fallback": "energy-icons:storm-48",
	});
}

export default Component;
