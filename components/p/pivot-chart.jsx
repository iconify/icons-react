import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mppryz_wt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mppryz_wt"/>`,
		"fallback": "fluent-mdl2:pivot-chart",
	});
}

export default Component;
