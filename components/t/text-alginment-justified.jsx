import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbh9tiw4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbh9tiw4m"/>`,
		"fallback": "ix:text-alginment-justified",
	});
}

export default Component;
