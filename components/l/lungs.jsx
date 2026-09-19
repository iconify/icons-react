import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_7cduu4i.css';
import '../../css/x/xu6tp6cqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_7cduu4i"/><path class="xu6tp6cqf"/>`,
		"fallback": "boxicons:lungs",
	});
}

export default Component;
