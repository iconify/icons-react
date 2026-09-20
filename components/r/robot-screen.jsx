import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ivum-mb2j.css';
import '../../css/d/deohuwbcr.css';
import '../../css/y/y5klab06g.css';
import '../../css/s/s8psr7u_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ivum-mb2j"/><path class="deohuwbcr"/><path class="y5klab06g"/><path class="s8psr7u_s"/></g>`,
		"fallback": "mage:robot-screen",
	});
}

export default Component;
