import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/lbue7y00m.css';
import '../../css/t/twoigx9_z.css';
import '../../css/r/rg7rardxv.css';
import '../../css/t/tucbmo-ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="lbue7y00m"/><path class="twoigx9_z"/><path class="rg7rardxv"/></g><path class="tucbmo-ob"/></g>`,
		"fallback": "solar:list-plus-minimalistic-bold-duotone",
	});
}

export default Component;
