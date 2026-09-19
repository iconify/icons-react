import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn4l59wgc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn4l59wgc"/>`,
		"fallback": "icomoon-free:sort-alpha-asc",
	});
}

export default Component;
