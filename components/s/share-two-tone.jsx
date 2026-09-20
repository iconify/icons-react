import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ywvvvh6hi.css';
import '../../css/h/hezc43bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ywvvvh6hi"/><path class="hezc43bmb"/></g>`,
		"fallback": "keyline-icons:share-two-tone",
	});
}

export default Component;
