import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rmn71cyel.css';
import '../../css/v/vhl69_bjv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="rmn71cyel"/><path class="vhl69_bjv"/></g>`,
		"fallback": "marketeq:switch-right",
	});
}

export default Component;
