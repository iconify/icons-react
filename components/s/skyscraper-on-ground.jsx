import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwyfjgb1h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwyfjgb1h"/>`,
		"fallback": "pinhead:skyscraper-on-ground",
	});
}

export default Component;
