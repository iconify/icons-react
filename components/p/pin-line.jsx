import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6nl4-bla.css';
import '../../css/c/ch4baybtb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 i6nl4-bla"/><path class="ch4baybtb clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pin-line",
	});
}

export default Component;
