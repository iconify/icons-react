import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id30-xb5a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id30-xb5a"/>`,
		"fallback": "picon:twitter",
	});
}

export default Component;
