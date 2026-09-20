import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfbhqh24h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfbhqh24h"/>`,
		"fallback": "pinhead:person-falling-on-rough-surface",
	});
}

export default Component;
