import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cq80kcbok.css';
import '../../css/o/oogc20b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cq80kcbok"/><path class="oogc20b8w"/></g>`,
		"fallback": "tabler:rosette-number-1",
	});
}

export default Component;
