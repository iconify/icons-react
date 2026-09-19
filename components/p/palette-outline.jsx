import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmrttlbyf.css';
import '../../css/t/tvb-a3rpz.css';
import '../../css/j/jabh3esin.css';
import '../../css/k/kb_nqjyfv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmrttlbyf"/><path class="tvb-a3rpz"/><path class="jabh3esin"/><path class="kb_nqjyfv"/></g>`,
		"fallback": "glyphs:palette-outline",
	});
}

export default Component;
