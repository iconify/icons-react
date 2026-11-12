import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni_g83x2x.css';
import '../../css/a/a4a1azmng.css';
import '../../css/g/g11ghhn1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni_g83x2x"/><path class="a4a1azmng"/><path class="g11ghhn1b"/>`,
		"fallback": "selfhst:redis-dark",
	});
}

export default Component;
