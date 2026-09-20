import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkev-m10y.css';
import '../../css/h/hkyogqi7y.css';
import '../../css/c/cjexdzt_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pkev-m10y"/><path clip-rule="evenodd" class="hkyogqi7y"/><path class="cjexdzt_p"/></g>`,
		"fallback": "nrk:rectangle-portrait-to-landscape-expressive",
	});
}

export default Component;
