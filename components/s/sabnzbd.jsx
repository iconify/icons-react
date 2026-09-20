import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2zihunpi.css';
import '../../css/n/nuiom3xgn.css';
import '../../css/u/u07xh6bzl.css';
import '../../css/r/ra5mw5bki.css';
import '../../css/i/ip8mjmxtv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2zihunpi"/><path class="nuiom3xgn"/><path class="u07xh6bzl"/><path class="ra5mw5bki"/><path class="ip8mjmxtv"/>`,
		"fallback": "selfhst:sabnzbd",
	});
}

export default Component;
