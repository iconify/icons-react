import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn1nicbwk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn1nicbwk"/>`,
		"fallback": "fa7-solid:money-bill-transfer",
	});
}

export default Component;
