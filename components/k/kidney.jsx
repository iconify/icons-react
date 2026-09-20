import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu3r8obcb.css';
import '../../css/n/nh9_vbc8y.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu3r8obcb"/><path class="nh9_vbc8y"/>`,
		"fallback": "medical-icon:kidney",
	});
}

export default Component;
