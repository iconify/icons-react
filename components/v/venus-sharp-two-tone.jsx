import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/ui59x3aub.css';
import '../../css/r/rvumidbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ui59x3aub"/><path class="rvumidbiw"/></g>`,
		"fallback": "keyline-icons:venus-sharp-two-tone",
	});
}

export default Component;
