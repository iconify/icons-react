import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fhg9uzbbf.css';
import '../../css/j/juyra7bjq.css';
import '../../css/e/e0si8p1_g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fhg9uzbbf"/><path class="juyra7bjq"/><path class="e0si8p1_g"/></g>`,
		"fallback": "streamline-flex:subscription-cashflow",
	});
}

export default Component;
