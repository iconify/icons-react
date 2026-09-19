import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk9i22bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk9i22bqm"/>`,
		"fallback": "cbi:sega-saturn",
	});
}

export default Component;
