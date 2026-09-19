import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf_j2_b2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf_j2_b2d"/>`,
		"fallback": "carbon:scis-control-tower",
	});
}

export default Component;
