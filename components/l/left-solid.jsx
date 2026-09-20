import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6vv8jbpn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6vv8jbpn"/>`,
		"fallback": "teenyicons:left-solid",
	});
}

export default Component;
