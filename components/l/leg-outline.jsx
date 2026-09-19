import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_jz6jb-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_jz6jb-u"/>`,
		"fallback": "healthicons:leg-outline",
	});
}

export default Component;
