import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs__h_6vs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs__h_6vs"/>`,
		"fallback": "cryptocurrency:ntbc",
	});
}

export default Component;
