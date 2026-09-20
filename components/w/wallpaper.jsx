import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uzyc0it6n.css';
import '../../css/p/pu70qibba.css';
import '../../css/j/j_7ku_4mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uzyc0it6n"/><path class="pu70qibba"/><path class="j_7ku_4mw"/></g>`,
		"fallback": "tabler:wallpaper",
	});
}

export default Component;
