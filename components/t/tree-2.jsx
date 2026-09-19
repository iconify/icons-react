import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bnef9kbbo.css';
import '../../css/n/ni_1h2beg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bnef9kbbo"/><path class="ni_1h2beg"/></g>`,
		"fallback": "glyphs:tree-2",
	});
}

export default Component;
