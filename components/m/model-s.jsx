import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7-6b3kbh.css';
import '../../css/x/xnaxp_oyy.css';
import '../../css/m/mj3jpacnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7-6b3kbh"/><path class="xnaxp_oyy"/><path class="mj3jpacnu"/>`,
		"fallback": "ion:model-s",
	});
}

export default Component;
