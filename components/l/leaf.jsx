import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v33ei8qyr.css';
import '../../css/e/eu2fnio2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v33ei8qyr"/><path class="eu2fnio2o"/></g>`,
		"fallback": "lucide:leaf",
	});
}

export default Component;
