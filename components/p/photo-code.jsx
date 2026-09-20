import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ea4hx2bih.css';
import '../../css/k/kyghn6brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ea4hx2bih"/><path class="kyghn6brt"/></g>`,
		"fallback": "tabler:photo-code",
	});
}

export default Component;
