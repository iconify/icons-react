import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xd1ssyung.css';
import '../../css/x/xkcd5bbtr.css';
import '../../css/d/dprrhwbfp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xd1ssyung"/><path class="xkcd5bbtr"/><path class="dprrhwbfp"/></g>`,
		"fallback": "streamline-flex:signage-pedestrian-no-crossing",
	});
}

export default Component;
