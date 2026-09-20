import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nzxhvcg1u.css';
import '../../css/a/am_64dmky.css';
import '../../css/l/l2g80cb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nzxhvcg1u"/><path class="am_64dmky"/><path class="l2g80cb3z"/></g>`,
		"fallback": "keyline-icons:trophy-duotone",
	});
}

export default Component;
