import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-zxycb7m.css';
import '../../css/k/kj6daq0ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o-zxycb7m"/><path class="kj6daq0ea"/></g>`,
		"fallback": "coolicons:npm-duocolor-round",
	});
}

export default Component;
