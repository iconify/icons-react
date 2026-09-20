import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le4ktn-ax.css';
import '../../css/q/qfz352b-c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le4ktn-ax"/><path class="qfz352b-c"/>`,
		"fallback": "streamline-pixel:interface-essential-stopwatch",
	});
}

export default Component;
