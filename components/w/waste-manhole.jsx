import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl5jfab4x.css';
import '../../css/l/luhh6r95d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl5jfab4x"/><path class="luhh6r95d"/>`,
		"fallback": "temaki:waste-manhole",
	});
}

export default Component;
