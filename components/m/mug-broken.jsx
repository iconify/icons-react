import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f_18xcbpp.css';
import '../../css/a/ab9oag7th.css';
import '../../css/n/n5gy6sdjs.css';
import '../../css/j/jlzv4qbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f_18xcbpp"/><path class="ab9oag7th"/><path class="n5gy6sdjs"/><path class="jlzv4qbob"/></g>`,
		"fallback": "solar:mug-broken",
	});
}

export default Component;
