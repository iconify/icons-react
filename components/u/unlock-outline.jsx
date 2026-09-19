import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax45mqb4h.css';
import '../../css/i/i6wr-kbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax45mqb4h"/><path class="i6wr-kbqm"/>`,
		"fallback": "eva:unlock-outline",
	});
}

export default Component;
