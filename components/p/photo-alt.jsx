import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t1i4u809l.css';
import '../../css/j/j6miii01f.css';
import '../../css/s/sv9ccdysk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t1i4u809l"/><path class="j6miii01f"/><path class="sv9ccdysk"/></g>`,
		"fallback": "tabler:photo-alt",
	});
}

export default Component;
