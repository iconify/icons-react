import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/freu4xjfp.css';
import '../../css/x/xbvgcsbll.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="freu4xjfp"/><path class="xbvgcsbll"/></g>`,
		"fallback": "marketeq:suspension-2",
	});
}

export default Component;
