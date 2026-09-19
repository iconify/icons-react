import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/snqb6-bdz.css';
import '../../css/c/cvb-85bki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="snqb6-bdz"/><path class="cvb-85bki"/></g>`,
		"fallback": "icon-park:magic",
	});
}

export default Component;
