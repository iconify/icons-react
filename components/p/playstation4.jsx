import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-41nfxjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-41nfxjf"/>`,
		"fallback": "cib:playstation4",
	});
}

export default Component;
