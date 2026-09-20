import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cry743bec.css';
import '../../css/v/v9nh7dwel.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cry743bec"/><path class="v9nh7dwel"/></g>`,
		"fallback": "marketeq:vision",
	});
}

export default Component;
