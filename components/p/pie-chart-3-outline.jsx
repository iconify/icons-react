import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyzoqq60w.css';
import '../../css/k/k5gsbk5ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dyzoqq60w"/><path class="k5gsbk5ud"/>`,
		"fallback": "solar:pie-chart-3-outline",
	});
}

export default Component;
