import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io42-nhcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io42-nhcy"/>`,
		"fallback": "thesvg-color:monster",
	});
}

export default Component;
