import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2h002-cn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a2h002-cn"/>`,
		"fallback": "streamline:lift-remix",
	});
}

export default Component;
