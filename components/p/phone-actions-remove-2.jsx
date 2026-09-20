import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuzli8bkb.css';
import '../../css/q/qy1k3p33h.css';
import '../../css/x/xchgk-0yz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuzli8bkb"/><path class="qy1k3p33h"/><path class="xchgk-0yz"/>`,
		"fallback": "streamline-pixel:phone-actions-remove-2",
	});
}

export default Component;
