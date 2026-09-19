import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdkpdlb7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdkpdlb7n"/>`,
		"fallback": "famicons:key-sharp",
	});
}

export default Component;
