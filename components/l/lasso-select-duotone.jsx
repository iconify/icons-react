import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjlambcfe.css';
import '../../css/e/eik-sezpc.css';
import '../../css/r/r3rm-cb9f.css';
import '../../css/v/vnzjq74em.css';
import '../../css/v/vvl9_5q-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjlambcfe"/><path class="eik-sezpc"/><path class="r3rm-cb9f"/><path class="vnzjq74em"/><path class="vvl9_5q-k"/></g>`,
		"fallback": "lucide-extended:lasso-select-duotone",
	});
}

export default Component;
