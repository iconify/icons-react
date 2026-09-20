import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr2j63fil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr2j63fil"/>`,
		"fallback": "thesvg-color:interbase",
	});
}

export default Component;
