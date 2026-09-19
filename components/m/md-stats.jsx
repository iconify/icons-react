import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t73xq5ncc.css';
import '../../css/v/v2py68bzc.css';
import '../../css/p/pbzz1jk3o.css';
import '../../css/e/ez80zy7ri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t73xq5ncc"/><path class="v2py68bzc"/><path class="pbzz1jk3o"/><path class="ez80zy7ri"/>`,
		"fallback": "ion:md-stats",
	});
}

export default Component;
