import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9-4m7han.css';
import '../../css/i/i54-r6grq.css';
import '../../css/z/z5ni2fbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u9-4m7han"/><path class="i54-r6grq"/><path class="z5ni2fbvl"/></g>`,
		"fallback": "hugeicons:playlist-02",
	});
}

export default Component;
