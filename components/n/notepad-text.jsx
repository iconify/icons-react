import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt3dn4bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt3dn4bpp"/>`,
		"fallback": "vadivam:notepad-text",
	});
}

export default Component;
