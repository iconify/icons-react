import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8wrg7o9z.css';
import '../../css/w/wgxunzb9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8wrg7o9z"/><ellipse class="wgxunzb9r"/>`,
		"fallback": "nimbus:mobile",
	});
}

export default Component;
