import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olu6a1y6o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 olu6a1y6o"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tasks-solid",
	});
}

export default Component;
