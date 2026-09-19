import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxn2zjbnb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxn2zjbnb"/>`,
		"fallback": "fa6-brands:stripe",
	});
}

export default Component;
