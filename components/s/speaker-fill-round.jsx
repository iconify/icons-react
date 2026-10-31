import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbw5gmbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbw5gmbdk"/>`,
		"fallback": "coolicons:speaker-fill-round",
	});
}

export default Component;
