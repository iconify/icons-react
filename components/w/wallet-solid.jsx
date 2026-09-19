import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrazanbrd.css';
import '../../css/k/k3m086bma.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 hrazanbrd"/><circle class="clr-i-solid clr-i-solid-path-2 k3m086bma"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:wallet-solid",
	});
}

export default Component;
