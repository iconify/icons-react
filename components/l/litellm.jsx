import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_8iubmh.css';
import '../../css/c/cl2ahfl2g.css';
import '../../css/n/nc-y7w9wa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1_8iubmh"/><path class="cl2ahfl2g"/><path class="nc-y7w9wa"/>`,
		"fallback": "selfhst:litellm",
	});
}

export default Component;
