import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfy2zropo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfy2zropo"/>`,
		"fallback": "maki:table-tennis",
	});
}

export default Component;
