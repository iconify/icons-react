import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xna70pbwt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xna70pbwt"/>`,
		"fallback": "teenyicons:svg-outline",
	});
}

export default Component;
