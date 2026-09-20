import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/va3q40bmt.css';
import '../../css/v/v1tanzbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="va3q40bmt"/><path class="v1tanzbkg"/></g>`,
		"fallback": "solar:video-library-outline",
	});
}

export default Component;
