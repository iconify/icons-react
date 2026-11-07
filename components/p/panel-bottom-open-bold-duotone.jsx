import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq9rqn1zt.css';
import '../../css/r/rw5qbebuy.css';
import '../../css/n/nad7zgbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nq9rqn1zt"/><path class="rw5qbebuy"/><path class="nad7zgbpt"/>`,
		"fallback": "solar:panel-bottom-open-bold-duotone",
	});
}

export default Component;
