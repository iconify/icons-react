import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmu75ol-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmu75ol-r"/>`,
		"fallback": "mynaui:one-diamond-solid",
	});
}

export default Component;
