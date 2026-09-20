import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cikj799ze.css';
import '../../css/j/ji6cdtapd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cikj799ze"/><path clip-rule="evenodd" class="ji6cdtapd"/>`,
		"fallback": "token:let",
	});
}

export default Component;
