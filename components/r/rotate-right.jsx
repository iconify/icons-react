import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtq57z_rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtq57z_rz"/>`,
		"fallback": "grommet-icons:rotate-right",
	});
}

export default Component;
