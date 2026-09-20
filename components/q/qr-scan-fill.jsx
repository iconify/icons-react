import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bysxm5l-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bysxm5l-c"/>`,
		"fallback": "ri:qr-scan-fill",
	});
}

export default Component;
