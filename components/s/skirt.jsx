import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsyu101jd.css';
import '../../css/x/xc9r3eb5l.css';
import '../../css/g/g3h3_1c-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nsyu101jd"/><path class="xc9r3eb5l"/><path class="g3h3_1c-n"/></g>`,
		"fallback": "lucide-lab:skirt",
	});
}

export default Component;
