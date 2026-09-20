import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mdfjxj7vm.css';
import '../../css/h/hvl1_kb0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mdfjxj7vm"/><path class="hvl1_kb0p"/></g>`,
		"fallback": "streamline-flex:screenshot",
	});
}

export default Component;
