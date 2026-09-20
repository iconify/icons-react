import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxg8xs31d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxg8xs31d"/>`,
		"fallback": "thesvg:ory",
	});
}

export default Component;
