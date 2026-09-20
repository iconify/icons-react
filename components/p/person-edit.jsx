import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/elcdkcpal.css';
import '../../css/k/k2eulob4k.css';
import '../../css/c/ci_w7dbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="elcdkcpal"/><path class="k2eulob4k"/><path class="ci_w7dbvr"/></g>`,
		"fallback": "streamline-cyber:person-edit",
	});
}

export default Component;
