import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/csazfyzrw.css';
import '../../css/h/hehssobyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="csazfyzrw wm-k"/><path class="hehssobyh wm-a"/></g>`,
		"fallback": "withicons:text-search-gloss",
	});
}

export default Component;
