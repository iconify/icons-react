import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhhhj_z0d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhhhj_z0d"/>`,
		"fallback": "pinhead:plane-up",
	});
}

export default Component;
