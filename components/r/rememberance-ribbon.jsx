import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt9m3043v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt9m3043v"/>`,
		"fallback": "pinhead:rememberance-ribbon",
	});
}

export default Component;
