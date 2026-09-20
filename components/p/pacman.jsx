import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bbqs1wl2x.css';
import '../../css/f/fm_7hjd2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bbqs1wl2x"/><path class="fm_7hjd2t"/></g>`,
		"fallback": "tabler:pacman",
	});
}

export default Component;
