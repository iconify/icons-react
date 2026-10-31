import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k8695sbsq.css';
import '../../css/a/aqzxuljmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k8695sbsq"/><path class="aqzxuljmv"/></g>`,
		"fallback": "coolicons:potted-plant-duocolor-round",
	});
}

export default Component;
