import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/n/n8lxffbkh.css';
import '../../css/l/lt4p4-b0l.css';
import '../../css/c/caqr-9fws.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><g class="dcqdxh5zc"><circle class="sgor8wbzm"/><path class="n8lxffbkh"/><path class="lt4p4-b0l"/><path class="caqr-9fws"/></g>`,
		"fallback": "openmoji:relieved-face",
	});
}

export default Component;
