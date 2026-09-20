import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zabbtyb5d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zabbtyb5d"/>`,
		"fallback": "pinhead:three-dots-horizontal-in-rectangle",
	});
}

export default Component;
