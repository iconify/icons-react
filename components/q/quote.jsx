import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dbaeypb-n.css';
import '../../css/u/uc3t51hqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="dbaeypb-n"/><path class="uc3t51hqw"/></g>`,
		"fallback": "icon-park:quote",
	});
}

export default Component;
