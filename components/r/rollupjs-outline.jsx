import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt6rq6zsl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt6rq6zsl"/>`,
		"fallback": "teenyicons:rollupjs-outline",
	});
}

export default Component;
