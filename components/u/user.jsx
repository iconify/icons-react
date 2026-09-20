import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rbcrhccwk.css';
import '../../css/z/zwuk11b-k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="rbcrhccwk"/><path class="zwuk11b-k"/></g>`,
		"fallback": "marketeq:user",
	});
}

export default Component;
