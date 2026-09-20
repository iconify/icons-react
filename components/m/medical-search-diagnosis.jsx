import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/x8sz7e6ca.css';
import '../../css/f/f6woq_8mf.css';
import '../../css/i/if1clzb1m.css';
import '../../css/u/u5uxzrbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="x8sz7e6ca"/><path class="f6woq_8mf"/><path class="if1clzb1m"/><path class="u5uxzrbmc"/></g>`,
		"fallback": "streamline-sharp-color:medical-search-diagnosis",
	});
}

export default Component;
