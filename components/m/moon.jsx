import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb44_r7uv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb44_r7uv"/>`,
		"fallback": "doodle-icons:moon",
	});
}

export default Component;
