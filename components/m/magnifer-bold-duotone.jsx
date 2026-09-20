import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-tqdrbyb.css';
import '../../css/c/czuk_uaey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-tqdrbyb"/><path class="czuk_uaey"/>`,
		"fallback": "solar:magnifer-bold-duotone",
	});
}

export default Component;
