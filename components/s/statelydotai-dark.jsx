import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek6sb0brr.css';

const viewBox = {"width":1000,"height":405};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek6sb0brr"/>`,
		"fallback": "thesvg-color:statelydotai-dark",
	});
}

export default Component;
