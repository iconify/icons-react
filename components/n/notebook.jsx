import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/twfzd8uco.css';
import '../../css/t/tbiog74tt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="twfzd8uco"/><path class="tbiog74tt"/></g>`,
		"fallback": "marketeq:notebook",
	});
}

export default Component;
