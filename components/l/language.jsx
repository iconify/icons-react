import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iha5l2r0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iha5l2r0p"/>`,
		"fallback": "fontisto:language",
	});
}

export default Component;
