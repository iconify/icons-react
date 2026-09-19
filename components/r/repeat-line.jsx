import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoq8dyb8e.css';
import '../../css/b/b5l56obkd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 hoq8dyb8e"/><path class="b5l56obkd clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:repeat-line",
	});
}

export default Component;
