import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wint20b7f.css';
import '../../css/x/xquxm3qvr.css';
import '../../css/g/gr9r1imcw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wint20b7f"/><path class="xquxm3qvr"/><path class="gr9r1imcw"/></g>`,
		"fallback": "streamline:nature-ecology-potted-tree-2-tree-plant-pot",
	});
}

export default Component;
