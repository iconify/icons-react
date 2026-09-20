import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vjq39j9el.css';
import '../../css/x/xndopnbjj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vjq39j9el"/><path class="xndopnbjj"/></g>`,
		"fallback": "marketeq:water-tap",
	});
}

export default Component;
