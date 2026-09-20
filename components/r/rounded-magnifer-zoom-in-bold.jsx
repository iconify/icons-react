import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffmaiwfmc.css';
import '../../css/u/u7grwebtt.css';
import '../../css/i/ixgpzbb0u.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGH8WKjcRa"><g class="ft5dv1b6b"><path class="ffmaiwfmc"/><path clip-rule="evenodd" class="u7grwebtt"/><path clip-rule="evenodd" class="ixgpzbb0u"/></g></mask></defs><path mask="url(#SVGH8WKjcRa)" class="w49j0rbvv"/>`,
		"fallback": "solar:rounded-magnifer-zoom-in-bold",
	});
}

export default Component;
