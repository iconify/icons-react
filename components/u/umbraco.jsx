import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efg_z3lhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efg_z3lhp"/>`,
		"fallback": "mdi:umbraco",
	});
}

export default Component;
