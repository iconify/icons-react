import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz21dlb4p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz21dlb4p"/>`,
		"fallback": "picon:or",
	});
}

export default Component;
