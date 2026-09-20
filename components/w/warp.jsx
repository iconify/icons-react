import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8naembgy.css';
import '../../css/c/cnpgasf1a.css';
import '../../css/y/y7dn9kh7h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="u8naembgy"><path class="cnpgasf1a"/><path class="y7dn9kh7h"/></g>`,
		"fallback": "material-icon-theme:warp",
	});
}

export default Component;
