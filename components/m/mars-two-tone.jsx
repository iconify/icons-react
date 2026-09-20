import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmrsucqff.css';
import '../../css/o/o2133cbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lmrsucqff"/><path class="o2133cbro"/></g>`,
		"fallback": "keyline-icons:mars-two-tone",
	});
}

export default Component;
