import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr4r3o7xw.css';
import '../../css/u/ule9-cczc.css';
import '../../css/d/dapyzkble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="lr4r3o7xw"/><rect class="ule9-cczc"/><rect class="dapyzkble"/>`,
		"fallback": "eva:menu-outline",
	});
}

export default Component;
