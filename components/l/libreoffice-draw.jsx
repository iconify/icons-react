import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuktlbv5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuktlbv5z"/>`,
		"fallback": "thesvg:libreoffice-draw",
	});
}

export default Component;
