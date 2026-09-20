import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wapvfib6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wapvfib6a"/>`,
		"fallback": "tdesign:setting-filled",
	});
}

export default Component;
