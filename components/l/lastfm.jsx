import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_unyib1z.css';

const viewBox = {"width":994.95,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_unyib1z"/>`,
		"fallback": "brandico:lastfm",
	});
}

export default Component;
