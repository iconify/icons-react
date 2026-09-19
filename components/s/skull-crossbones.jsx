import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9ht4_blj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9ht4_blj"/>`,
		"fallback": "fa7-solid:skull-crossbones",
	});
}

export default Component;
