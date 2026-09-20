import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-06-vbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-06-vbtu"/>`,
		"fallback": "thesvg-color:wear-os",
	});
}

export default Component;
