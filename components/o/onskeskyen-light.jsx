import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcm3z1pyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcm3z1pyp"/>`,
		"fallback": "selfhst:onskeskyen-light",
	});
}

export default Component;
