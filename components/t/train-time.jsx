import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd_kcpkgg.css';
import '../../css/j/j7n6imbex.css';
import '../../css/a/ar36zcbgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd_kcpkgg"/><path class="j7n6imbex"/><path class="ar36zcbgz"/>`,
		"fallback": "carbon:train-time",
	});
}

export default Component;
