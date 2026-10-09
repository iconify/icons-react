import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6_diewni.css';
import '../../css/y/yig4ixxde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6_diewni"/><path class="yig4ixxde"/>`,
		"fallback": "energy-icons:pen-48-bold",
	});
}

export default Component;
