import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyk6yzhpk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyk6yzhpk"/>`,
		"fallback": "game-icons:sergeant",
	});
}

export default Component;
