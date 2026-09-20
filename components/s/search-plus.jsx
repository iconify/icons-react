import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n82zcy6-h.css';
import '../../css/c/cwu8tob-z.css';
import '../../css/n/nwzo9bcnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n82zcy6-h"/><path class="cwu8tob-z"/><path class="nwzo9bcnr"/>`,
		"fallback": "prime:search-plus",
	});
}

export default Component;
