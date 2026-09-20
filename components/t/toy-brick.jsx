import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gndl05mtq.css';
import '../../css/h/h5_88om8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gndl05mtq"/><path class="h5_88om8z"/></g>`,
		"fallback": "lucide:toy-brick",
	});
}

export default Component;
