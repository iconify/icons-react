import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdrmlmx_y.css';
import '../../css/y/ytv8j6l6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdrmlmx_y"/><path class="ytv8j6l6t"/>`,
		"fallback": "stash:square-check-duotone",
	});
}

export default Component;
