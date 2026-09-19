import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8e288bnc.css';
import '../../css/u/un6ua_l-y.css';
import '../../css/v/v4sg5jbkh.css';
import '../../css/z/zlv3p35br.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8e288bnc"/><path class="un6ua_l-y"/><path class="v4sg5jbkh"/><path class="zlv3p35br"/>`,
		"fallback": "famicons:logo-no-smoking",
	});
}

export default Component;
