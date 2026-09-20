import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz9atvzrs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz9atvzrs"/>`,
		"fallback": "teenyicons:plug-outline",
	});
}

export default Component;
