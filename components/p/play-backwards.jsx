import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdt6ofbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdt6ofbga"/>`,
		"fallback": "gg:play-backwards",
	});
}

export default Component;
