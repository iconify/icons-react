import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnlv2sbng.css';
import '../../css/b/b8q2yu59y.css';
import '../../css/b/bp-ry8byp.css';
import '../../css/u/ucfh2zb-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnlv2sbng"/><path class="b8q2yu59y"/><ellipse class="bp-ry8byp"/><ellipse class="ucfh2zb-j"/>`,
		"fallback": "ion:social-snapchat-outline",
	});
}

export default Component;
