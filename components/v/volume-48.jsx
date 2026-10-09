import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9bzs8odx.css';
import '../../css/i/ijrn25w1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9bzs8odx"/><path class="ijrn25w1m"/>`,
		"fallback": "energy-icons:volume-48",
	});
}

export default Component;
