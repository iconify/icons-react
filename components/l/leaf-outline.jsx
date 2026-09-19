import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uif2hsb6m.css';
import '../../css/m/m-2igxbdk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uif2hsb6m"/><path class="m-2igxbdk"/>`,
		"fallback": "ion:leaf-outline",
	});
}

export default Component;
