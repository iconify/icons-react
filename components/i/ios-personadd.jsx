import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/temjivdtd.css';
import '../../css/e/e3yi-0i_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="temjivdtd"/><path class="e3yi-0i_w"/>`,
		"fallback": "ion:ios-personadd",
	});
}

export default Component;
