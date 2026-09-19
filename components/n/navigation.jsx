import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcosuhb5e.css';

const viewBox = {"width":320,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcosuhb5e"/>`,
		"fallback": "zmdi:navigation",
	});
}

export default Component;
