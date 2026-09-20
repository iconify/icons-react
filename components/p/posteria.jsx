import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckmxwib0i.css';
import '../../css/t/tzxadxgno.css';
import '../../css/e/e8ygrwbil.css';
import '../../css/q/q75jjebbk.css';
import '../../css/z/zz-ow3bzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckmxwib0i"/><path class="tzxadxgno"/><path class="e8ygrwbil"/><circle class="q75jjebbk"/><path class="zz-ow3bzn"/>`,
		"fallback": "selfhst:posteria",
	});
}

export default Component;
