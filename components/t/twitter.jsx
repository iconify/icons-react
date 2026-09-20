import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxn_06esw.css';
import '../../css/z/zq5w5wbjl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxn_06esw"/><path class="zq5w5wbjl"/>`,
		"fallback": "openmoji:twitter",
	});
}

export default Component;
