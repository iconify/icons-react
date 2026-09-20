import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_l0pbn1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_l0pbn1c"/>`,
		"fallback": "token:solo",
	});
}

export default Component;
