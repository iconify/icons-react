import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aljgoxbom.css';
import '../../css/i/ii4z4oljf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aljgoxbom clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 ii4z4oljf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:pause-line",
	});
}

export default Component;
