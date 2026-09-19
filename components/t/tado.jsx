import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf6ew-d1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf6ew-d1v"/>`,
		"fallback": "cbi:tado",
	});
}

export default Component;
