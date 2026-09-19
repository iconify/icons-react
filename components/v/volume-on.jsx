import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oewbiur4i.css';

const viewBox = {"width":2016,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oewbiur4i"/>`,
		"fallback": "vs:volume-on",
	});
}

export default Component;
