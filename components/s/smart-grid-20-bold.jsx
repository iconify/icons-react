import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvggvrfgt.css';
import '../../css/x/x3yktye3k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvggvrfgt"/><path class="x3yktye3k"/>`,
		"fallback": "energy-icons:smart-grid-20-bold",
	});
}

export default Component;
