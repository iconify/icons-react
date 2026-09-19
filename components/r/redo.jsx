import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vcukmpbrx.css';
import '../../css/i/i-e-g7o-e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vcukmpbrx"/><path class="i-e-g7o-e"/></g>`,
		"fallback": "icon-park:redo",
	});
}

export default Component;
