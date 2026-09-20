import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2nz88a_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2nz88a_b"/>`,
		"fallback": "meteor-icons:table-remove",
	});
}

export default Component;
