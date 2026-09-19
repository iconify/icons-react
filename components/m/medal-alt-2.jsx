import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l86i2yr1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l86i2yr1h"/>`,
		"fallback": "boxicons:medal-alt-2",
	});
}

export default Component;
