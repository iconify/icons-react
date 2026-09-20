import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pmwf-8b_d.css';
import '../../css/p/pvzuj3b6i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pmwf-8b_d"/><path class="pvzuj3b6i"/></g>`,
		"fallback": "streamline-flex:user-queen-crown",
	});
}

export default Component;
