import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfmfmpbxl.css';
import '../../css/m/ml6utgbbo.css';
import '../../css/g/gwabbzj7e.css';
import '../../css/e/eu6y-wbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wfmfmpbxl"/><path clip-rule="evenodd" class="ml6utgbbo"/><path clip-rule="evenodd" class="gwabbzj7e"/><path class="eu6y-wbzg"/></g>`,
		"fallback": "solar:user-speak-rounded-outline",
	});
}

export default Component;
