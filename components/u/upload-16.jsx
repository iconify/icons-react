import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-tx9_o5y.css';
import '../../css/l/l3l94kbvk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-tx9_o5y"/><path class="l3l94kbvk"/>`,
		"fallback": "octicon:upload-16",
	});
}

export default Component;
