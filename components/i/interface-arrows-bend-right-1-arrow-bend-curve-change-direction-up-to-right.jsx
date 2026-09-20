import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ok4vjb7lz.css';
import '../../css/x/xhaccsbgq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ok4vjb7lz"/><path class="xhaccsbgq"/></g>`,
		"fallback": "streamline:interface-arrows-bend-right-1-arrow-bend-curve-change-direction-up-to-right",
	});
}

export default Component;
