import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rvl8hqvnj.css';
import '../../css/q/qhb4jfb5g.css';
import '../../css/q/qhtreac6e.css';
import '../../css/r/rf7rbhbsd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rvl8hqvnj"/><path class="qhb4jfb5g"/><path class="qhtreac6e"/><path class="rf7rbhbsd"/></g>`,
		"fallback": "icon-park-outline:stretching",
	});
}

export default Component;
