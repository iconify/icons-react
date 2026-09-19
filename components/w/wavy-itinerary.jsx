import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k62oq-_zl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k62oq-_zl"/>`,
		"fallback": "game-icons:wavy-itinerary",
	});
}

export default Component;
