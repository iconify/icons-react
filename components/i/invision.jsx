import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5747cl7p.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5747cl7p"/>`,
		"fallback": "fa6-brands:invision",
	});
}

export default Component;
