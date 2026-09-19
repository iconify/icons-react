import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f70-5sbtf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f70-5sbtf"/>`,
		"fallback": "cib:keybase",
	});
}

export default Component;
