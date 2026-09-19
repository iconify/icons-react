import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/ogd54c27i.css';
import '../../css/k/k650zokpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ogd54c27i"/><path class="k650zokpf"/></g>`,
		"fallback": "hugeicons:legal-02",
	});
}

export default Component;
