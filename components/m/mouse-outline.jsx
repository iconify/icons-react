import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx-4cl3tk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx-4cl3tk"/>`,
		"fallback": "teenyicons:mouse-outline",
	});
}

export default Component;
