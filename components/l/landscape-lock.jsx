import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uhm_tz61o.css';
import '../../css/y/ypd3-cn5l.css';
import '../../css/e/eraj5km8c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uhm_tz61o"/><path class="ypd3-cn5l"/><path class="eraj5km8c"/></g>`,
		"fallback": "streamline-flex:landscape-lock",
	});
}

export default Component;
