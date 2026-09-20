import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyffxu8qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyffxu8qg"/>`,
		"fallback": "keyline-icons:map-pin-x",
	});
}

export default Component;
