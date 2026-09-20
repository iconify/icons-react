import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaepzkbau.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaepzkbau"/>`,
		"fallback": "openmoji:shuffle-tracks-button",
	});
}

export default Component;
