import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9d27nb_x.css';
import '../../css/k/k48mjsb2e.css';
import '../../css/v/v1yg_pbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9d27nb_x"/><path class="k48mjsb2e"/><path class="v1yg_pbbx"/></g>`,
		"fallback": "lucide-extended:tractor-duotone",
	});
}

export default Component;
