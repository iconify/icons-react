import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vxw7cwoqs.css';
import '../../css/i/iueqhpjty.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vxw7cwoqs"/><path class="iueqhpjty"/></g>`,
		"fallback": "glyphs-poly:pill",
	});
}

export default Component;
