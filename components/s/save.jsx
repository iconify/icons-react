import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0fw8pbdn.css';
import '../../css/r/rkj0d4ldk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0fw8pbdn"/><path class="rkj0d4ldk"/>`,
		"fallback": "pixel:save",
	});
}

export default Component;
