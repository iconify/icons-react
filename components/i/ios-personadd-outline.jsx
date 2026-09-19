import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/temjivdtd.css';
import '../../css/x/xsit_hb8q.css';
import '../../css/c/cj87lbbfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="temjivdtd"/><path class="xsit_hb8q"/><path class="cj87lbbfo"/>`,
		"fallback": "ion:ios-personadd-outline",
	});
}

export default Component;
