import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3we5pccv.css';
import '../../css/t/tli6u_ttm.css';
import '../../css/b/b7ri4q8vc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3we5pccv"/><path class="tli6u_ttm"/><path class="b7ri4q8vc"/>`,
		"fallback": "fxemoji:riceball",
	});
}

export default Component;
