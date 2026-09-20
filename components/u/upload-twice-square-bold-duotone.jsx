import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/t/tsr8chrao.css';
import '../../css/v/v9qu_vhkm.css';
import '../../css/n/n_0nr230t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="tsr8chrao"/><path class="v9qu_vhkm"/><path class="n_0nr230t"/></g>`,
		"fallback": "solar:upload-twice-square-bold-duotone",
	});
}

export default Component;
