import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4h6zt4p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4h6zt4p"/>`,
		"fallback": "fluent-mdl2:rain-showers-day",
	});
}

export default Component;
