import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0biiu03p.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0biiu03p"/>`,
		"fallback": "maki:marker-11",
	});
}

export default Component;
