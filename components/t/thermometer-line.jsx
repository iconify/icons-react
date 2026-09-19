import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7e_w-tnk.css';
import '../../css/i/i8klc0q7m.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 n7e_w-tnk"/><path class="clr-i-outline clr-i-outline-path-2 i8klc0q7m"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:thermometer-line",
	});
}

export default Component;
