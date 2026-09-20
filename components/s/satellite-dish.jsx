import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q62uhjbpq.css';
import '../../css/g/gsh3p8bkl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q62uhjbpq"/><path class="gsh3p8bkl"/></g>`,
		"fallback": "streamline-flex:satellite-dish",
	});
}

export default Component;
