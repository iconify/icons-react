import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_b9n5x1d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_b9n5x1d"/>`,
		"fallback": "fluent-mdl2:task-manager-mirrored",
	});
}

export default Component;
