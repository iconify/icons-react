import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uewj530ca.css';
import '../../css/t/tyfzm8ejq.css';
import '../../css/a/a3o4grs6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uewj530ca"/><path class="tyfzm8ejq"/><path class="a3o4grs6z"/>`,
		"fallback": "stash:radar-light",
	});
}

export default Component;
