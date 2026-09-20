import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hspx6ne-i.css';
import '../../css/s/slg4arnwd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hspx6ne-i"/><path class="slg4arnwd"/></g>`,
		"fallback": "marketeq:swiss-army-knife",
	});
}

export default Component;
