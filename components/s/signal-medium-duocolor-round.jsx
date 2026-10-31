import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jf-xq3dua.css';
import '../../css/h/hmy55ry8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jf-xq3dua"/><path class="hmy55ry8s"/></g>`,
		"fallback": "coolicons:signal-medium-duocolor-round",
	});
}

export default Component;
