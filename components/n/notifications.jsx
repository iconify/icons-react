import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osa9y-bzt.css';

const viewBox = {"width":368,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osa9y-bzt"/>`,
		"fallback": "zmdi:notifications",
	});
}

export default Component;
