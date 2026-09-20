import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omopg9mhb.css';
import '../../css/n/ngs9tw2ne.css';
import '../../css/i/id5d7cbpm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omopg9mhb"/><path class="ngs9tw2ne"/><path class="id5d7cbpm"/>`,
		"fallback": "streamline-pixel:interface-essential-text-format-2",
	});
}

export default Component;
