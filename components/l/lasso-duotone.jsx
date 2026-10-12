import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhyxv3b0h.css';
import '../../css/e/eik-sezpc.css';
import '../../css/r/r3rm-cb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yhyxv3b0h"/><path class="eik-sezpc"/><path class="r3rm-cb9f"/></g>`,
		"fallback": "lucide-extended:lasso-duotone",
	});
}

export default Component;
