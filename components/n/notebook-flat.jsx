import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mffpo8b1l.css';
import '../../css/l/lhrsd3bjm.css';
import '../../css/u/ufg_ywe-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mffpo8b1l"/><path class="lhrsd3bjm"/><path clip-rule="evenodd" class="ufg_ywe-p"/></g>`,
		"fallback": "streamline-sharp-color:notebook-flat",
	});
}

export default Component;
