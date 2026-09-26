import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcor-1yvr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcor-1yvr"/>`,
		"fallback": "carbon:view-matrix",
	});
}

export default Component;
