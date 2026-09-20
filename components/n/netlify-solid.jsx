import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8kk785yc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8kk785yc"/>`,
		"fallback": "teenyicons:netlify-solid",
	});
}

export default Component;
