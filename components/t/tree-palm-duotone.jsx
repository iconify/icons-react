import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqtep_s-s.css';
import '../../css/a/ayhlv9u9e.css';
import '../../css/a/a-_i7mbjj.css';
import '../../css/g/gqmf2tv2x.css';
import '../../css/k/k0dlcabab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rqtep_s-s"/><path class="ayhlv9u9e"/><path class="a-_i7mbjj"/><path class="gqmf2tv2x"/><path class="k0dlcabab"/></g>`,
		"fallback": "lucide-extended:tree-palm-duotone",
	});
}

export default Component;
