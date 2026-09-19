import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6xt5c87v.css';
import '../../css/a/a-9mugb1d.css';
import '../../css/u/up6r22q7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j6xt5c87v"/><circle class="a-9mugb1d"/><path class="up6r22q7v"/>`,
		"fallback": "ion:nuclear-outline",
	});
}

export default Component;
