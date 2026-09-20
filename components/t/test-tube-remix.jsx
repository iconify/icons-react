import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdzlb1bab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xdzlb1bab"/>`,
		"fallback": "streamline:test-tube-remix",
	});
}

export default Component;
