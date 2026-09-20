import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi3a7acyt.css';
import '../../css/b/bjedjv8iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi3a7acyt"/><path class="bjedjv8iv"/>`,
		"fallback": "pixel:newspaper",
	});
}

export default Component;
