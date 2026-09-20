import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2fe0csam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2fe0csam"/>`,
		"fallback": "thesvg-color:kando",
	});
}

export default Component;
