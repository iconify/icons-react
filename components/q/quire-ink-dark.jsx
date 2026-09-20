import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcxgohb4h.css';
import '../../css/x/xbefkzbox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcxgohb4h"/><path class="xbefkzbox"/>`,
		"fallback": "selfhst:quire-ink-dark",
	});
}

export default Component;
