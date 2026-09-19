import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/brdiwzb2k.css';
import '../../css/x/xv0a3hbfe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="brdiwzb2k"/><path class="xv0a3hbfe"/></g>`,
		"fallback": "cryptocurrency-color:storj",
	});
}

export default Component;
