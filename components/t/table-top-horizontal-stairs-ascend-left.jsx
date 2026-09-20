import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s83lq0lzl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s83lq0lzl"/>`,
		"fallback": "memory:table-top-horizontal-stairs-ascend-left",
	});
}

export default Component;
