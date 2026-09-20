import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lappfubno.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lappfubno"/>`,
		"fallback": "system-uicons:table-header",
	});
}

export default Component;
