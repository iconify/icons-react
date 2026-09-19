import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppu21twmy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppu21twmy"/>`,
		"fallback": "whh:loadingfive",
	});
}

export default Component;
