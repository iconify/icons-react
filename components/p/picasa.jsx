import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p19pt6bpz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p19pt6bpz"/>`,
		"fallback": "uiw:picasa",
	});
}

export default Component;
