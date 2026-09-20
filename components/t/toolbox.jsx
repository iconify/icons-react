import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b274l8q4l.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b274l8q4l"/>`,
		"fallback": "temaki:toolbox",
	});
}

export default Component;
