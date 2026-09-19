import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4hs4hvwr.css';

const viewBox = {"width":520,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4hs4hvwr"/>`,
		"fallback": "ps:megaphone",
	});
}

export default Component;
