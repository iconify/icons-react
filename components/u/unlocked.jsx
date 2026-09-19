import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvch9ib1h.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvch9ib1h"/>`,
		"fallback": "fontisto:unlocked",
	});
}

export default Component;
