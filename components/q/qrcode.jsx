import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djat35b0t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djat35b0t"/>`,
		"fallback": "uiw:qrcode",
	});
}

export default Component;
