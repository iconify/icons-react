import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d9ipvbcrp.css';
import '../../css/d/dfk6wqbuw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path clip-rule="evenodd" class="d9ipvbcrp"/><path class="dfk6wqbuw"/></g>`,
		"fallback": "streamline-plump:voice-scan-1",
	});
}

export default Component;
