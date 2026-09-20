import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn27xeyvd.css';
import '../../css/z/ztni599nj.css';
import '../../css/n/n2_771bjc.css';
import '../../css/a/a6gyunkev.css';
import '../../css/d/drphy1bum.css';
import '../../css/k/k3rh4gb-e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn27xeyvd"/><g class="ztni599nj"><circle class="n2_771bjc"/><path class="a6gyunkev"/><path class="drphy1bum"/><path class="k3rh4gb-e"/></g>`,
		"fallback": "openmoji:tired-face",
	});
}

export default Component;
