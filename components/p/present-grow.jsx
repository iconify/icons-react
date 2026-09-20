import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/ypjcrxbpc.css';
import '../../css/c/cqtlcublg.css';
import '../../css/w/w2z92fx2d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ypjcrxbpc"/><path class="cqtlcublg"/><path class="w2z92fx2d"/></g>`,
		"fallback": "marketeq:present-grow",
	});
}

export default Component;
