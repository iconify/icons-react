import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfn85e6ir.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfn85e6ir"/>`,
		"fallback": "fa7-brands:itch-io",
	});
}

export default Component;
