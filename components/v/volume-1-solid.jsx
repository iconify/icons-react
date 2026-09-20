import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de6tnr8sa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de6tnr8sa"/>`,
		"fallback": "teenyicons:volume-1-solid",
	});
}

export default Component;
