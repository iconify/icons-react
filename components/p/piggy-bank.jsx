import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nudoueb7n.css';
import '../../css/u/uu4tkm2-w.css';
import '../../css/o/oa4x40bhk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="nudoueb7n"/><path class="uu4tkm2-w"/><path class="oa4x40bhk"/></g>`,
		"fallback": "streamline-plump-color:piggy-bank",
	});
}

export default Component;
