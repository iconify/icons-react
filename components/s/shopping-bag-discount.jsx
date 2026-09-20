import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h4hac2qdv.css';
import '../../css/m/m4j28nbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h4hac2qdv"/><path class="m4j28nbue"/></g>`,
		"fallback": "tabler:shopping-bag-discount",
	});
}

export default Component;
