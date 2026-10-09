import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8dcesb7n.css';
import '../../css/s/sb555ccjn.css';
import '../../css/v/vtvsuobia.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8dcesb7n"/><path class="sb555ccjn"/><path class="vtvsuobia"/>`,
		"fallback": "energy-icons:pipeline-48",
	});
}

export default Component;
