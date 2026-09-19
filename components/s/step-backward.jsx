import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fegijgjyn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fegijgjyn"/>`,
		"fallback": "fa7-solid:step-backward",
	});
}

export default Component;
