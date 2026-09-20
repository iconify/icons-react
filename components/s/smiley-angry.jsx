import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cq0dx3b3w.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/k/k2j3rkbhc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cq0dx3b3w"/><path class="r2th9g7qg"/><path class="k2j3rkbhc"/></g>`,
		"fallback": "streamline:smiley-angry",
	});
}

export default Component;
