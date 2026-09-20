import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gnw5xtb-e.css';
import '../../css/m/m2994wbbo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gnw5xtb-e"/><path class="m2994wbbo"/></g>`,
		"fallback": "streamline:programming-script-1-language-programming-code",
	});
}

export default Component;
