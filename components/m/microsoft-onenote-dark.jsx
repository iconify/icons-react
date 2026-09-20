import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs1kckuxk.css';
import '../../css/y/ytnuvpdkn.css';
import '../../css/p/p4itqc0gf.css';
import '../../css/y/yav708big.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs1kckuxk"/><path class="ytnuvpdkn"/><path class="p4itqc0gf"/><path class="yav708big"/>`,
		"fallback": "selfhst:microsoft-onenote-dark",
	});
}

export default Component;
