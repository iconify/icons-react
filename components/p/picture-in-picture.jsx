import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm1hi_b-d.css';
import '../../css/f/ffq0z92oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm1hi_b-d"/><path class="ffq0z92oy"/>`,
		"fallback": "boxicons:picture-in-picture",
	});
}

export default Component;
