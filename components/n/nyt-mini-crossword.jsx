import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umjb_uhmw.css';
import '../../css/t/t6ojfgbzo.css';
import '../../css/o/o8-7gvb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umjb_uhmw"/><path class="t6ojfgbzo"/><path class="o8-7gvb1d"/>`,
		"fallback": "selfhst:nyt-mini-crossword",
	});
}

export default Component;
