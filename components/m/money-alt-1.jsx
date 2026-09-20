import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/kwpmoib5n.css';
import '../../css/j/jpp7lr3ew.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="kwpmoib5n"/><path class="jpp7lr3ew"/></g>`,
		"fallback": "marketeq:money-alt-1",
	});
}

export default Component;
