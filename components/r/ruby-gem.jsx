import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/l/lrz8immyw.css';
import '../../css/q/qhmpibcto.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="lrz8immyw"/><path class="qhmpibcto"/></g>`,
		"fallback": "catppuccin:ruby-gem",
	});
}

export default Component;
