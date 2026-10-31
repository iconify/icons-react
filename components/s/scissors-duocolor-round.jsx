import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqtszy6sm.css';
import '../../css/n/nybt6xb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dqtszy6sm"/><path class="nybt6xb3m"/></g>`,
		"fallback": "coolicons:scissors-duocolor-round",
	});
}

export default Component;
