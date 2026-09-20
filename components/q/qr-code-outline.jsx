import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3cvb4ysw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3cvb4ysw"/>`,
		"fallback": "lsicon:qr-code-outline",
	});
}

export default Component;
