import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2u3d9n2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2u3d9n2b"/>`,
		"fallback": "mdi:thermostat-cog",
	});
}

export default Component;
