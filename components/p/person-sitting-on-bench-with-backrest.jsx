import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do9d8sb7x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do9d8sb7x"/>`,
		"fallback": "pinhead:person-sitting-on-bench-with-backrest",
	});
}

export default Component;
