import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swc4nv0cw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swc4nv0cw"/>`,
		"fallback": "picon:transport",
	});
}

export default Component;
