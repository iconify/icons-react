import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oju0y9a-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oju0y9a-p"/>`,
		"fallback": "ri:qr-scan-ai-line",
	});
}

export default Component;
