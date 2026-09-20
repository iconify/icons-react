import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qapn1w99o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qapn1w99o"/>`,
		"fallback": "jam:spell-check",
	});
}

export default Component;
