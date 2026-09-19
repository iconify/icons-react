import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgpc5ebjb.css';
import '../../css/r/r8_pblidm.css';
import '../../css/y/yp3yrlb6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgpc5ebjb"/><path class="r8_pblidm"/><path class="yp3yrlb6s"/>`,
		"fallback": "fxemoji:linksymbol",
	});
}

export default Component;
