import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6t79wbyi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6t79wbyi"/>`,
		"fallback": "pinhead:motorboat-on-ramp",
	});
}

export default Component;
