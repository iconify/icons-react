import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fs6iqpw3v.css';
import '../../css/f/fm2p1ibey.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fs6iqpw3v"/><path class="fm2p1ibey"/></g>`,
		"fallback": "glyphs-poly:lock-open",
	});
}

export default Component;
