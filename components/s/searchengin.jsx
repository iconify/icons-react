import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxm34-kzs.css';

const viewBox = {"width":460,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxm34-kzs"/>`,
		"fallback": "fa-brands:searchengin",
	});
}

export default Component;
