import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnax4vb1j.css';
import '../../css/v/vo9nbhbmr.css';
import '../../css/n/n8sy5do8i.css';
import '../../css/x/xvr-not9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnax4vb1j"/><path class="vo9nbhbmr"/><path class="n8sy5do8i"/><path class="xvr-not9z"/>`,
		"fallback": "selfhst:sunshine",
	});
}

export default Component;
