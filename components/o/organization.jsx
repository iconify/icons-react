import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4kneyq5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4kneyq5m"/>`,
		"fallback": "codicon:organization",
	});
}

export default Component;
