import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iamnamxvy.css';
import '../../css/t/taq655d2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iamnamxvy"/><path class="taq655d2h"/></g>`,
		"fallback": "glyphs:sort-outline",
	});
}

export default Component;
