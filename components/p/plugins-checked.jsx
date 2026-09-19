import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuc792mew.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuc792mew"/>`,
		"fallback": "dashicons:plugins-checked",
	});
}

export default Component;
