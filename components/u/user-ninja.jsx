import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg118db-d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg118db-d"/>`,
		"fallback": "fa6-solid:user-ninja",
	});
}

export default Component;
