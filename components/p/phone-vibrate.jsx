import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7_4w1gdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7_4w1gdo"/>`,
		"fallback": "streamline-sharp:phone-vibrate",
	});
}

export default Component;
