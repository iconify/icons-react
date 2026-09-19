import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piz0fn1_w.css';
import '../../css/y/yqacr5idm.css';
import '../../css/a/auwbk5w3x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="piz0fn1_w"><path class="yqacr5idm"/><path class="auwbk5w3x"/></g>`,
		"fallback": "devicon:shopware",
	});
}

export default Component;
