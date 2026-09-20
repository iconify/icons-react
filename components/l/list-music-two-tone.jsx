import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/twoywjb9g.css';
import '../../css/j/j1hrbmamx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="twoywjb9g"/><path class="j1hrbmamx"/></g>`,
		"fallback": "keyline-icons:list-music-two-tone",
	});
}

export default Component;
