import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqtragb6c.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqtragb6c"/>`,
		"fallback": "fontisto:troy",
	});
}

export default Component;
