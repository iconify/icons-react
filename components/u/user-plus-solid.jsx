import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4al6hb4w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4al6hb4w"/>`,
		"fallback": "teenyicons:user-plus-solid",
	});
}

export default Component;
