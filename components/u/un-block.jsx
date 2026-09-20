import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do5d53btf.css';
import '../../css/j/j6h5hmb5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do5d53btf"/><path class="j6h5hmb5m"/>`,
		"fallback": "ooui:un-block",
	});
}

export default Component;
