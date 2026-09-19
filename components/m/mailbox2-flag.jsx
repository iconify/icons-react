import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k645rcbrt.css';
import '../../css/m/mv2wifbah.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k645rcbrt"/><path class="mv2wifbah"/></g>`,
		"fallback": "bi:mailbox2-flag",
	});
}

export default Component;
