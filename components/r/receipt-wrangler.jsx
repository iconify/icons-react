import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bumpl1bqw.css';
import '../../css/h/hosfmobjb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bumpl1bqw"/><path class="hosfmobjb"/>`,
		"fallback": "selfhst:receipt-wrangler",
	});
}

export default Component;
