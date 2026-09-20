import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df7-84bmu.css';
import '../../css/w/whpncgbes.css';
import '../../css/l/lbxg3kb3a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df7-84bmu"/><path class="whpncgbes"/><path class="lbxg3kb3a"/>`,
		"fallback": "openmoji:ok-stencil",
	});
}

export default Component;
