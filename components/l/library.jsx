import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs8_lbz1a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs8_lbz1a"/>`,
		"fallback": "icons8:library",
	});
}

export default Component;
