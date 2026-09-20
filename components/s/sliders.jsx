import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drkgu-blj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drkgu-blj"/>`,
		"fallback": "nimbus:sliders",
	});
}

export default Component;
