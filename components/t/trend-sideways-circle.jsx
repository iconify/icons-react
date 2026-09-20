import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5jv108xe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5jv108xe"/>`,
		"fallback": "ix:trend-sideways-circle",
	});
}

export default Component;
