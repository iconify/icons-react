import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ugz22dbyb.css';
import '../../css/t/tqosrtbdi.css';
import '../../css/b/b87_h3bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ugz22dbyb"/><path class="tqosrtbdi"/><path class="b87_h3bbn"/></g>`,
		"fallback": "lucide:mop-sparkles",
	});
}

export default Component;
