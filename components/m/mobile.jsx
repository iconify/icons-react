import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdr3iq2cw.css';
import '../../css/g/g9odgzfvl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xdr3iq2cw"/><path class="g9odgzfvl"/></g>`,
		"fallback": "healthicons:mobile",
	});
}

export default Component;
