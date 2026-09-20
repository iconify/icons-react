import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzx0n4bah.css';
import '../../css/u/uaf5xjb-s.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/d3lxfibzu.css';
import '../../css/m/msbwwgivf.css';
import '../../css/p/pdjiv277h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzx0n4bah"/><path class="uaf5xjb-s"/><g class="jn8qy4bru"><path class="d3lxfibzu"/><path class="msbwwgivf"/><path class="pdjiv277h"/></g>`,
		"fallback": "openmoji:sun-behind-small-cloud",
	});
}

export default Component;
