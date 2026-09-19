import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/x/xkvfz37jb.css';
import '../../css/n/ng80-_bnb.css';
import '../../css/u/ukeh4mbcm.css';
import '../../css/b/b9smcsrpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="xkvfz37jb"/><path class="ng80-_bnb"/><path class="ukeh4mbcm"/><path class="b9smcsrpp"/></g>`,
		"fallback": "hugeicons:swatch-book",
	});
}

export default Component;
