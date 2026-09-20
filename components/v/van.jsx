import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e-9r19gtm.css';
import '../../css/r/rn_h7kb5h.css';
import '../../css/a/a0zl88bqz.css';
import '../../css/e/ec_xsy4gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e-9r19gtm"/><path class="rn_h7kb5h"/><circle class="a0zl88bqz"/><circle class="ec_xsy4gs"/></g>`,
		"fallback": "lucide:van",
	});
}

export default Component;
