import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyb-4v94m.css';
import '../../css/o/olexncc0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyb-4v94m"/><path class="olexncc0c"/>`,
		"fallback": "energy-icons:smart-grid-20",
	});
}

export default Component;
