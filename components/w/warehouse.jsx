import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj53t6bhe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj53t6bhe"/>`,
		"fallback": "fa7-solid:warehouse",
	});
}

export default Component;
