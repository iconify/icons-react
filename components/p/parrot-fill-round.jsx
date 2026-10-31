import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgc3ywb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgc3ywb0f"/>`,
		"fallback": "coolicons:parrot-fill-round",
	});
}

export default Component;
