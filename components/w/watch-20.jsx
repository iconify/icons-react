import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgfat0y1j.css';
import '../../css/v/voq389b8h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgfat0y1j"/><path class="voq389b8h"/>`,
		"fallback": "energy-icons:watch-20",
	});
}

export default Component;
