import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrbcrlbrp.css';
import '../../css/k/kn1-sg2xn.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 qrbcrlbrp"/><path class="clr-i-outline clr-i-outline-path-2 kn1-sg2xn"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:sync-line",
	});
}

export default Component;
