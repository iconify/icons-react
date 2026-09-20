import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-zfknb-j.css';
import '../../css/x/x_b42ib6c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y-zfknb-j"/><path class="x_b42ib6c"/></g>`,
		"fallback": "streamline-flex:left-click",
	});
}

export default Component;
