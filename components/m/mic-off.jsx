import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty51eibwy.css';
import '../../css/p/pg7d3m2ja.css';
import '../../css/y/ybvnaxjzx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty51eibwy"/><path class="pg7d3m2ja"/><path class="ybvnaxjzx"/>`,
		"fallback": "ion:mic-off",
	});
}

export default Component;
