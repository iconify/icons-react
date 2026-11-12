import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0l9w0esz.css';
import '../../css/d/da7n23beg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0l9w0esz"/><path class="da7n23beg"/>`,
		"fallback": "selfhst:markstack-light",
	});
}

export default Component;
