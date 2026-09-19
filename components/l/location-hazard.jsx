import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkmuvyw1o.css';
import '../../css/a/a_ls9acgf.css';
import '../../css/n/nu2_-nbje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xkmuvyw1o"/><path class="a_ls9acgf"/><path class="nu2_-nbje"/>`,
		"fallback": "carbon:location-hazard",
	});
}

export default Component;
