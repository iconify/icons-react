import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8slav1si.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8slav1si"/>`,
		"fallback": "energy-icons:person-48",
	});
}

export default Component;
