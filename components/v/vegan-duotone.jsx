import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afarpnbpz.css';
import '../../css/h/hs_7v4d8f.css';
import '../../css/m/mxdyr1b6x.css';
import '../../css/p/pvoalybxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="afarpnbpz"/><path class="hs_7v4d8f"/><path class="mxdyr1b6x"/><path class="pvoalybxg"/></g>`,
		"fallback": "lucide-extended:vegan-duotone",
	});
}

export default Component;
