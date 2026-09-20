import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7by1o2ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7by1o2ah"/>`,
		"fallback": "streamline-sharp:one-finger-short-tap-remix",
	});
}

export default Component;
