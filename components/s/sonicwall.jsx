import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf0a-7b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf0a-7b-c"/>`,
		"fallback": "thesvg-color:sonicwall",
	});
}

export default Component;
