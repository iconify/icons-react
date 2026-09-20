import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn19yrb9l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gn19yrb9l"/>`,
		"fallback": "streamline:smiley-smirk-solid",
	});
}

export default Component;
