import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md3z0jeoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md3z0jeoy"/>`,
		"fallback": "mdi:polymer",
	});
}

export default Component;
