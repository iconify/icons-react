import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9x4zmb6a.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9x4zmb6a"/>`,
		"fallback": "maki:sushi-11",
	});
}

export default Component;
