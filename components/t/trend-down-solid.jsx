import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbtm4g3rc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbtm4g3rc"/>`,
		"fallback": "teenyicons:trend-down-solid",
	});
}

export default Component;
