import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avjgpmkfp.css';
import '../../css/f/fpfzvibxk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avjgpmkfp"/><path class="fpfzvibxk"/>`,
		"fallback": "energy-icons:truck-48-bold",
	});
}

export default Component;
