import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lb8w-9tei.css';
import '../../css/u/u9xpopn1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lb8w-9tei"/><path class="u9xpopn1d"/></g>`,
		"fallback": "streamline-flex:time-lapse",
	});
}

export default Component;
