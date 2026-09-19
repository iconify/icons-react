import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clsdao61r.css';
import '../../css/l/l3ykglrhy.css';
import '../../css/c/c223jf_pj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="clsdao61r"><path class="l3ykglrhy"/><path class="c223jf_pj"/></g>`,
		"fallback": "catppuccin:snowpack",
	});
}

export default Component;
