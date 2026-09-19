import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/frzwsccnm.css';
import '../../css/c/c74-wy8tu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="frzwsccnm"/><path class="c74-wy8tu"/></g>`,
		"fallback": "icon-park:orange-station",
	});
}

export default Component;
