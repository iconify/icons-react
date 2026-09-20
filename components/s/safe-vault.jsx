import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wklxfkxcp.css';
import '../../css/b/bb9vrtnmv.css';
import '../../css/e/e6985kl4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wklxfkxcp"/><path class="bb9vrtnmv"/><path class="e6985kl4m"/></g>`,
		"fallback": "streamline-sharp-color:safe-vault",
	});
}

export default Component;
