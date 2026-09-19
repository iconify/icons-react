import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j17tqyb7a.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 j17tqyb7a"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:ruble-line",
	});
}

export default Component;
