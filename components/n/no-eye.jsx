import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuznmyb7t.css';

const viewBox = {"width":528,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuznmyb7t"/>`,
		"fallback": "ps:no-eye",
	});
}

export default Component;
