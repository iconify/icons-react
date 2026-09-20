import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mev3yvbte.css';
import '../../css/k/k3ne98vfh.css';
import '../../css/a/ayameacfw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4 1)" class="jtowsomii"><path class="mev3yvbte"/><path class="k3ne98vfh"/><circle class="ayameacfw"/></g>`,
		"fallback": "system-uicons:rocket",
	});
}

export default Component;
