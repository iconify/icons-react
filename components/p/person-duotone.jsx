import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efx4t9bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efx4t9bgk"/>`,
		"fallback": "stash:person-duotone",
	});
}

export default Component;
