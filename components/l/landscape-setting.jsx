import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bvy5pzboo.css';
import '../../css/q/qe946z0fw.css';
import '../../css/o/obbpokbyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bvy5pzboo"/><path class="qe946z0fw"/><path class="obbpokbyl"/></g>`,
		"fallback": "streamline:landscape-setting",
	});
}

export default Component;
