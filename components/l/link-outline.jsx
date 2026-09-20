import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msv_7p0iu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msv_7p0iu"/>`,
		"fallback": "teenyicons:link-outline",
	});
}

export default Component;
