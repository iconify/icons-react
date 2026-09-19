import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh68jtbfr.css';
import '../../css/a/arfms3bcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh68jtbfr"/><path class="arfms3bcp"/>`,
		"fallback": "carbon:intent-request-active",
	});
}

export default Component;
