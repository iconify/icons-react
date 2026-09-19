import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jz9srl9wp.css';
import '../../css/h/h0op-rznz.css';
import '../../css/a/a1ulxtbht.css';
import '../../css/q/qhecqmane.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jz9srl9wp"/><path class="h0op-rznz"/><path class="a1ulxtbht"/><path class="qhecqmane"/></g>`,
		"fallback": "glyphs:note-medical-outline",
	});
}

export default Component;
