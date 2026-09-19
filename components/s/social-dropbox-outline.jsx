import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf4wyfbwq.css';
import '../../css/o/or5-kgblm.css';
import '../../css/q/qswqrgbaw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf4wyfbwq"/><path class="or5-kgblm"/><path class="qswqrgbaw"/>`,
		"fallback": "ion:social-dropbox-outline",
	});
}

export default Component;
