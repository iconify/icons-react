import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3esgbc0q.css';
import '../../css/z/zy8g_6utu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3esgbc0q"/><path class="zy8g_6utu"/>`,
		"fallback": "selfhst:kagi",
	});
}

export default Component;
