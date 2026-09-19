import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kdn8v93fz.css';
import '../../css/f/ftz4guzir.css';
import '../../css/h/h4e270blp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="kdn8v93fz"/><path class="ftz4guzir"/><path class="h4e270blp"/></g>`,
		"fallback": "icon-park-outline:upload-logs",
	});
}

export default Component;
