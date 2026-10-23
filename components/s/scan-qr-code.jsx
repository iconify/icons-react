import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q93mhbc4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q93mhbc4d"/>`,
		"fallback": "vadivam:scan-qr-code",
	});
}

export default Component;
