import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxngbs5rr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxngbs5rr"/>`,
		"fallback": "teenyicons:paw-solid",
	});
}

export default Component;
