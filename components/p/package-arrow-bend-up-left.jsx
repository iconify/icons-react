import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pvpo1cy5v.css';
import '../../css/u/u-xsveb6r.css';
import '../../css/v/vcureqwex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pvpo1cy5v"/><path class="u-xsveb6r"/><path class="vcureqwex"/></g>`,
		"fallback": "lucide:package-arrow-bend-up-left",
	});
}

export default Component;
