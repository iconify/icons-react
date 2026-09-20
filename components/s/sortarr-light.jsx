import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcadwc-xf.css';
import '../../css/k/kdwpv2bov.css';
import '../../css/a/a-z8z7pww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rcadwc-xf"/><path class="kdwpv2bov"/><path class="a-z8z7pww"/>`,
		"fallback": "selfhst:sortarr-light",
	});
}

export default Component;
