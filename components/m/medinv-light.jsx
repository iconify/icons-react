import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh8ic0_ra.css';
import '../../css/x/xtvx8sn3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh8ic0_ra"/><circle class="xtvx8sn3q"/>`,
		"fallback": "selfhst:medinv-light",
	});
}

export default Component;
