import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xxb6xqbby.css';
import '../../css/e/e9qrw554o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xxb6xqbby"/><path class="e9qrw554o"/></g>`,
		"fallback": "streamline-sharp:star-badge",
	});
}

export default Component;
