import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0am46jmx.css';
import '../../css/b/bdi5cobhw.css';
import '../../css/q/qjwupbcdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="d0am46jmx"/><path clip-rule="evenodd" class="bdi5cobhw"/><path class="qjwupbcdo"/></g>`,
		"fallback": "lets-icons:user-add-alt-duotone",
	});
}

export default Component;
