import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auzj7tbjw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auzj7tbjw"/>`,
		"fallback": "teenyicons:n64-outline",
	});
}

export default Component;
