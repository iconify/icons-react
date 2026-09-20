import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8yu3-13g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8yu3-13g"/>`,
		"fallback": "thesvg-color:mailgun",
	});
}

export default Component;
