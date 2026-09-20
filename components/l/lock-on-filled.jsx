import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atr_g023t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atr_g023t"/>`,
		"fallback": "tdesign:lock-on-filled",
	});
}

export default Component;
