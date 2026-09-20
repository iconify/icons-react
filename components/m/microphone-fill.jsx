import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsz94vn-b.css';
import '../../css/k/kvf4_8b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsz94vn-b"/><path class="kvf4_8b4z"/>`,
		"fallback": "mage:microphone-fill",
	});
}

export default Component;
