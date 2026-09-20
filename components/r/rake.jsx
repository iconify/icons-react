import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1-r8ou6u.css';
import '../../css/r/rjpmsmbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1-r8ou6u"/><path class="rjpmsmbhz"/>`,
		"fallback": "token:rake",
	});
}

export default Component;
