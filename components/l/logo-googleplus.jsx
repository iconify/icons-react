import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkqi2gdoy.css';
import '../../css/w/waq35gbzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkqi2gdoy"/><path class="waq35gbzy"/>`,
		"fallback": "ion:logo-googleplus",
	});
}

export default Component;
