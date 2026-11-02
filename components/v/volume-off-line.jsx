import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8nz2m9bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8nz2m9bq"/>`,
		"fallback": "mingcute:volume-off-line",
	});
}

export default Component;
