import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qau_99whd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qau_99whd"/>`,
		"fallback": "fa6-brands:linode",
	});
}

export default Component;
