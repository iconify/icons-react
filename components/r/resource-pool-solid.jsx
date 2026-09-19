import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_2i5mwhi.css';
import '../../css/p/pm4-heb4o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 j_2i5mwhi"/><path class="clr-i-solid clr-i-solid-path-2 pm4-heb4o"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:resource-pool-solid",
	});
}

export default Component;
