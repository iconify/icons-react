import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p58c_4zdf.css';
import '../../css/s/sb7qghx4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p58c_4zdf"/><path class="sb7qghx4e"/>`,
		"fallback": "solar:key-bold-duotone",
	});
}

export default Component;
