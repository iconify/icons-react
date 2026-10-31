import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pt2ig43ia.css';
import '../../css/u/ur8fgibmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pt2ig43ia"/><path class="ur8fgibmh"/></g>`,
		"fallback": "coolicons:signal-low-duocolor-round",
	});
}

export default Component;
