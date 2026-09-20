import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5-k6bcwk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5-k6bcwk"/>`,
		"fallback": "teenyicons:typescript-outline",
	});
}

export default Component;
