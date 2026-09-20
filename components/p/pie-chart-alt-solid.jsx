import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueaxwlb4u.css';
import '../../css/f/fosgzfbvu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueaxwlb4u"/><path class="fosgzfbvu"/>`,
		"fallback": "teenyicons:pie-chart-alt-solid",
	});
}

export default Component;
