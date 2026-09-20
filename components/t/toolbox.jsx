import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ay6jbyx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0ay6jbyx"/>`,
		"fallback": "picon:toolbox",
	});
}

export default Component;
