import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faejj4scx.css';
import '../../css/s/s6m9h_p1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faejj4scx"/><path clip-rule="evenodd" class="s6m9h_p1k"/>`,
		"fallback": "streamline-plump:virus-antivirus-solid",
	});
}

export default Component;
