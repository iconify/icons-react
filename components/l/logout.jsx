import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5fofrbqh.css';
import '../../css/v/vtw3o7h4f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5fofrbqh"/><path class="vtw3o7h4f"/>`,
		"fallback": "iwwa:logout",
	});
}

export default Component;
