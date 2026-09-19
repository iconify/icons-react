import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/unv2l9d6h.css';
import '../../css/c/cg77ixbhg.css';
import '../../css/w/wnxw6dn4a.css';
import '../../css/s/scoisiu9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="unv2l9d6h"/><path class="cg77ixbhg"/><path class="wnxw6dn4a"/><path class="scoisiu9n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:singer",
	});
}

export default Component;
