import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgpth7i1o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgpth7i1o"/>`,
		"fallback": "fa7-solid:tower-cell",
	});
}

export default Component;
