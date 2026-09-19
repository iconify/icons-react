import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju1abjbdv.css';
import '../../css/k/k9iop_blz.css';
import '../../css/f/ferv5fbqf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 ju1abjbdv"/><path class="clr-i-outline clr-i-outline-path-2 k9iop_blz"/><path class="clr-i-outline clr-i-outline-path-3 ferv5fbqf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pod-line",
	});
}

export default Component;
