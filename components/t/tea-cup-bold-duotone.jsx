import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/py52tgb9q.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/h6_39u4ff.css';
import '../../css/l/lf250abpc.css';
import '../../css/k/k9vzebc5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="py52tgb9q"/><g class="mc2zb0bvp"><path class="h6_39u4ff"/><path class="lf250abpc"/><path class="k9vzebc5b"/></g></g>`,
		"fallback": "solar:tea-cup-bold-duotone",
	});
}

export default Component;
