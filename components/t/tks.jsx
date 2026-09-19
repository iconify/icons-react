import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mrm-b0b6w.css';
import '../../css/m/md286fbip.css';
import '../../css/m/mby9vxbvb.css';
import '../../css/k/ke0ekgt1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="mrm-b0b6w"/><g class="md286fbip"><path class="mby9vxbvb"/><path class="ke0ekgt1o"/></g></g>`,
		"fallback": "cryptocurrency-color:tks",
	});
}

export default Component;
