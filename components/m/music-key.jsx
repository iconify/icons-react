import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/etu_4bcik.css';
import '../../css/y/yh3u2r5nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="etu_4bcik"/><path class="yh3u2r5nr"/></g>`,
		"fallback": "tabler:music-key",
	});
}

export default Component;
