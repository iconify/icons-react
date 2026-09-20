import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/m/mqp_o-bxc.css';
import '../../css/v/v7q06pb9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r2th9g7qg"/><path class="mqp_o-bxc"/><path class="v7q06pb9x"/></g>`,
		"fallback": "streamline:smiley-mask",
	});
}

export default Component;
