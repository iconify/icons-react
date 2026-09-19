import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edhpo_owh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edhpo_owh"/>`,
		"fallback": "ps:music-score",
	});
}

export default Component;
