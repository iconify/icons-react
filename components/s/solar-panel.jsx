import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilw7d2bmv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilw7d2bmv"/>`,
		"fallback": "fa6-solid:solar-panel",
	});
}

export default Component;
