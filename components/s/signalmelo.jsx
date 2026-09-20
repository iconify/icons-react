import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6v0dfk4x.css';
import '../../css/j/jlwljb5kc.css';
import '../../css/l/lnwuelbgi.css';
import '../../css/j/j6hmgkbja.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6v0dfk4x"/><path class="jlwljb5kc"/><path class="lnwuelbgi"/><path class="j6hmgkbja"/>`,
		"fallback": "thesvg-color:signalmelo",
	});
}

export default Component;
