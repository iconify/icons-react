import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a1vsxixsf.css';
import '../../css/c/cra21lbdi.css';
import '../../css/d/d81yb6boo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="a1vsxixsf"/><path clip-rule="evenodd" class="cra21lbdi"/><path class="d81yb6boo"/></g>`,
		"fallback": "icon-park:internal-expansion",
	});
}

export default Component;
