import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alzq8ibxd.css';
import '../../css/g/g6s61-bgg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alzq8ibxd clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 g6s61-bgg"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:talk-bubbles-line",
	});
}

export default Component;
