import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2jxlvb2i.css';
import '../../css/t/t-4rqjbfm.css';
import '../../css/k/ke-yukwch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2jxlvb2i"/><path class="t-4rqjbfm"/><path class="ke-yukwch"/>`,
		"fallback": "energy-icons:scour-protection-48-bold",
	});
}

export default Component;
