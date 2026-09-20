import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiygavb6e.css';
import '../../css/a/atbdsbcmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiygavb6e"/><path class="atbdsbcmu"/>`,
		"fallback": "pixel:themes",
	});
}

export default Component;
