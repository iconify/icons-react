import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kwun_emov.css';
import '../../css/x/xoxb-4ake.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kwun_emov"/><rect class="xoxb-4ake"/></g>`,
		"fallback": "lucide:scan-qr-code",
	});
}

export default Component;
