import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np5colb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np5colb1o"/>`,
		"fallback": "thesvg:steinberg",
	});
}

export default Component;
