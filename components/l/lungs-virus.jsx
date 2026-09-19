import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnd_fwb_o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnd_fwb_o"/>`,
		"fallback": "fa7-solid:lungs-virus",
	});
}

export default Component;
