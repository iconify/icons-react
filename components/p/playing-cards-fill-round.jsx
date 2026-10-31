import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq89u5v2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq89u5v2u"/>`,
		"fallback": "coolicons:playing-cards-fill-round",
	});
}

export default Component;
