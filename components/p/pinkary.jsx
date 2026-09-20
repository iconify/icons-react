import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0noxxbmb.css';
import '../../css/y/y46o0xb-b.css';
import '../../css/y/y2vg62bil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s0noxxbmb"/><path class="y46o0xb-b"/><path class="y2vg62bil"/>`,
		"fallback": "selfhst:pinkary",
	});
}

export default Component;
