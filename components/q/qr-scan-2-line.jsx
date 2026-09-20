import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx-rv1g-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx-rv1g-f"/>`,
		"fallback": "ri:qr-scan-2-line",
	});
}

export default Component;
