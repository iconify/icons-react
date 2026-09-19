import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eemwaab5j.css';
import '../../css/l/l1tjz6bep.css';
import '../../css/l/l3aiq-bqz.css';
import '../../css/b/bi5px2mad.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eemwaab5j"/><path class="l1tjz6bep"/><path class="l3aiq-bqz"/><path class="bi5px2mad"/></g>`,
		"fallback": "glyphs:skull-outline",
	});
}

export default Component;
