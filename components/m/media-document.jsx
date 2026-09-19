import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfc5vfbmg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfc5vfbmg"/>`,
		"fallback": "dashicons:media-document",
	});
}

export default Component;
