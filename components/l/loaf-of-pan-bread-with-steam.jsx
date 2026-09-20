import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrhwmpbjd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrhwmpbjd"/>`,
		"fallback": "pinhead:loaf-of-pan-bread-with-steam",
	});
}

export default Component;
