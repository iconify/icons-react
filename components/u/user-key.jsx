import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h--dx184e.css';
import '../../css/g/ghya2pbow.css';
import '../../css/n/ny1qr-80o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h--dx184e"/><circle class="ghya2pbow"/><circle class="ny1qr-80o"/></g>`,
		"fallback": "lucide:user-key",
	});
}

export default Component;
