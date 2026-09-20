import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/etty_hrtu.css';
import '../../css/b/b6u7mo2sx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="etty_hrtu"/><path class="b6u7mo2sx"/></g>`,
		"fallback": "streamline:programming-bug-code-bug-security-programming-secure-computer",
	});
}

export default Component;
