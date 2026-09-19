import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir4y4fk6l.css';
import '../../css/m/md286fbip.css';
import '../../css/r/rmfjhdctn.css';
import '../../css/l/ljmi3kvcl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ir4y4fk6l"/><g class="md286fbip"><path class="rmfjhdctn"/><path class="ljmi3kvcl"/></g></g>`,
		"fallback": "cryptocurrency-color:qnt",
	});
}

export default Component;
