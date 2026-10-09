import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqg6e7vrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqg6e7vrc"/>`,
		"fallback": "energy-icons:rare-earth-48-bold",
	});
}

export default Component;
