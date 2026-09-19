import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gblmqib0s.css';
import '../../css/c/cjq4bgbqk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 gblmqib0s"/><path class="cjq4bgbqk clr-i-outline clr-i-outline-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:network-globe-line",
	});
}

export default Component;
