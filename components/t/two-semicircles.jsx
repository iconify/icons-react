import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk1fx-k4e.css';
import '../../css/n/nfdtw2x4x.css';
import '../../css/b/bcm2eibfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="tk1fx-k4e"><path class="nfdtw2x4x"/><path class="bcm2eibfs"/></g>`,
		"fallback": "icon-park:two-semicircles",
	});
}

export default Component;
