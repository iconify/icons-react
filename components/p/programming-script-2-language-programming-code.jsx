import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p5623oi1l.css';
import '../../css/o/okz80h31p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p5623oi1l"/><path class="okz80h31p"/></g>`,
		"fallback": "streamline:programming-script-2-language-programming-code",
	});
}

export default Component;
