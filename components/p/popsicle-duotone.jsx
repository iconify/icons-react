import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw3kdccbv.css';
import '../../css/x/x6bs8y2ml.css';
import '../../css/p/pkviv2b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cw3kdccbv"/><path class="x6bs8y2ml"/><path class="pkviv2b2g"/></g>`,
		"fallback": "lucide-extended:popsicle-duotone",
	});
}

export default Component;
