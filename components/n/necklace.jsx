import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2n82oqvn.css';
import '../../css/h/h8tw3o3rj.css';
import '../../css/b/bvk792blv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u2n82oqvn"/><path class="h8tw3o3rj"/><path class="bvk792blv"/></g>`,
		"fallback": "streamline-color:necklace",
	});
}

export default Component;
