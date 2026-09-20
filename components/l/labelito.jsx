import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z197esbqs.css';
import '../../css/p/pswsfxbhy.css';
import '../../css/r/ru9jsccjf.css';
import '../../css/h/hxvjidc_u.css';
import '../../css/u/ut_p-qbrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z197esbqs"/><path class="pswsfxbhy"/><path class="ru9jsccjf"/><path class="hxvjidc_u"/><path class="ut_p-qbrc"/>`,
		"fallback": "selfhst:labelito",
	});
}

export default Component;
