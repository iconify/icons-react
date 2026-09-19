import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fgh801jof.css';
import '../../css/k/kkl3fjb8n.css';
import '../../css/l/lq4d5ranb.css';
import '../../css/n/n7qjv3z9a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fgh801jof"/><path class="kkl3fjb8n"/><path class="lq4d5ranb"/><path class="n7qjv3z9a"/></g>`,
		"fallback": "glyphs:users-1-outline",
	});
}

export default Component;
