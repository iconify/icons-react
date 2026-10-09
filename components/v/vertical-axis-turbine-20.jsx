import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfgle7bjr.css';
import '../../css/v/v8-70c-7i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfgle7bjr"/><path class="v8-70c-7i"/>`,
		"fallback": "energy-icons:vertical-axis-turbine-20",
	});
}

export default Component;
