import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nl6rsdrsi.css';
import '../../css/m/meuhc9bia.css';
import '../../css/x/xdgehbn6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nl6rsdrsi"/><path class="meuhc9bia"/><path class="xdgehbn6x"/></g>`,
		"fallback": "icon-park:sun-hat",
	});
}

export default Component;
