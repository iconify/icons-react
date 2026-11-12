import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms0ln98en.css';
import '../../css/i/i3opoge7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms0ln98en"/><path class="i3opoge7m"/>`,
		"fallback": "selfhst:quire-ink-light",
	});
}

export default Component;
