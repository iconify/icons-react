import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apb_dgbpm.css';
import '../../css/v/vw3o48bdx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apb_dgbpm"/><path class="vw3o48bdx"/>`,
		"fallback": "energy-icons:microgrid-48-bold",
	});
}

export default Component;
