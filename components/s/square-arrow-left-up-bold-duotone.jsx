import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkwop1f3g.css';
import '../../css/r/romiv8ccz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkwop1f3g"/><path class="romiv8ccz"/>`,
		"fallback": "solar:square-arrow-left-up-bold-duotone",
	});
}

export default Component;
