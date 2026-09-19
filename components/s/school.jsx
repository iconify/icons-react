import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjp2ig6jr.css';
import '../../css/m/mch78aboz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjp2ig6jr"/><path class="mch78aboz"/>`,
		"fallback": "ion:school",
	});
}

export default Component;
