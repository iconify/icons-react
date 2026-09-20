import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bhf41ngxf.css';
import '../../css/y/yo1w9kbza.css';
import '../../css/p/phsohubuh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bhf41ngxf"/><path class="yo1w9kbza"/><path class="phsohubuh"/></g>`,
		"fallback": "streamline-flex:return-square-2",
	});
}

export default Component;
