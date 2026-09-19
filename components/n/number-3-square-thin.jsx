import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cgm86oegm.css';
import '../../css/q/qlxamfbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cgm86oegm"/><path class="qlxamfbej"/></g>`,
		"fallback": "iconamoon:number-3-square-thin",
	});
}

export default Component;
