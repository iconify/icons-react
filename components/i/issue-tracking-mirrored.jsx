import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1732fy7p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1732fy7p"/>`,
		"fallback": "fluent-mdl2:issue-tracking-mirrored",
	});
}

export default Component;
