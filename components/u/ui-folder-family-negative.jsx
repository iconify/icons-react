import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dv179xopj.css';
import '../../css/w/wl0yr8bgj.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsUiFolderFamilyNegative0)" class="cuyn6tgcc"><path class="dv179xopj"/><path clip-rule="evenodd" class="wl0yr8bgj"/></g><defs><clipPath id="healthiconsUiFolderFamilyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:ui-folder-family-negative",
	});
}

export default Component;
