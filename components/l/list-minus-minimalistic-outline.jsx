import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zj4qi_bsl.css';
import '../../css/l/lbue7y00m.css';
import '../../css/t/twoigx9_z.css';
import '../../css/r/rg7rardxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zj4qi_bsl"/><path class="lbue7y00m"/><path class="twoigx9_z"/><path class="rg7rardxv"/></g>`,
		"fallback": "solar:list-minus-minimalistic-outline",
	});
}

export default Component;
