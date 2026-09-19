import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thnmxrwna.css';
import '../../css/t/th59x_bgi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 thnmxrwna"/><path class="clr-i-outline clr-i-outline-path-2 th59x_bgi"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:mobile-phone-line",
	});
}

export default Component;
