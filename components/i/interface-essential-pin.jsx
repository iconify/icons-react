import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0etzhb1d.css';
import '../../css/l/lyljtlbfk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0etzhb1d"/><path class="lyljtlbfk"/>`,
		"fallback": "streamline-pixel:interface-essential-pin",
	});
}

export default Component;
