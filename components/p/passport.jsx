import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf44tobip.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf44tobip"/>`,
		"fallback": "fa7-solid:passport",
	});
}

export default Component;
