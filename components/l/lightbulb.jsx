import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/r87-mbbfe.css';
import '../../css/e/e6p_55blb.css';
import '../../css/m/mbtw7xbql.css';
import '../../css/d/dooba1b7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="r87-mbbfe"/><path class="e6p_55blb"/><path class="mbtw7xbql"/><path class="dooba1b7q"/></g>`,
		"fallback": "streamline-plump-color:lightbulb",
	});
}

export default Component;
