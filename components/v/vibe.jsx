import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzmm2vaaf.css';
import '../../css/p/pe3ussbli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="bzmm2vaaf"/><path class="pe3ussbli"/></g>`,
		"fallback": "cryptocurrency-color:vibe",
	});
}

export default Component;
