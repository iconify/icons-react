import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlu0cunfl.css';
import '../../css/o/ofj6-db5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlu0cunfl"/><path class="ofj6-db5m"/></g>`,
		"fallback": "tabler:play-football",
	});
}

export default Component;
