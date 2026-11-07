import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_78m3epb.css';
import '../../css/c/cq7nq2bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_78m3epb"/><path class="cq7nq2bzu"/>`,
		"fallback": "solar:laptop-3-bold",
	});
}

export default Component;
