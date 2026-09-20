import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k9s0t_7tw.css';
import '../../css/r/rg2ptfjgv.css';
import '../../css/e/ejvfr-qjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k9s0t_7tw"/><path class="rg2ptfjgv"/><path class="ejvfr-qjt"/></g>`,
		"fallback": "streamline-sharp-color:layout-right-sidebar",
	});
}

export default Component;
