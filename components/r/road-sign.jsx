import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bzanpxylq.css';
import '../../css/q/qdnrthbhb.css';
import '../../css/f/f6hdy3bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bzanpxylq"/><path class="qdnrthbhb"/><path class="f6hdy3bdu"/></g>`,
		"fallback": "tabler:road-sign",
	});
}

export default Component;
