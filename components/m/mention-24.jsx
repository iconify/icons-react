import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmn6vv7gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmn6vv7gz"/>`,
		"fallback": "octicon:mention-24",
	});
}

export default Component;
