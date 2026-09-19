import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqwr_sfrm.css';
import '../../css/i/i6wr-kbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqwr_sfrm"/><path class="i6wr-kbqm"/>`,
		"fallback": "eva:lock-outline",
	});
}

export default Component;
