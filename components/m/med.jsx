import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xbzfqw4ih.css';
import '../../css/s/s8ppwkbiv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="xbzfqw4ih"/><path class="s8ppwkbiv"/></g>`,
		"fallback": "cryptocurrency-color:med",
	});
}

export default Component;
