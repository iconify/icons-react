import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qdg6lobjo.css';
import '../../css/s/sy8it_bih.css';
import '../../css/s/sw3gs951t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qdg6lobjo"/><path class="sy8it_bih"/><path class="sw3gs951t"/></g>`,
		"fallback": "lucide:traffic-cone",
	});
}

export default Component;
