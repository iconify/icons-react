import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/ju2v4eblp.css';
import '../../css/e/efrkp9byv.css';
import '../../css/s/s8ogcvbvw.css';
import '../../css/v/vbjxz-bhh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ju2v4eblp"/><path class="efrkp9byv"/><path class="s8ogcvbvw"/><path class="vbjxz-bhh"/></g>`,
		"fallback": "glyphs:layer-backward-outline",
	});
}

export default Component;
