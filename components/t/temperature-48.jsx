import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg26btbri.css';
import '../../css/i/iasbg5lvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg26btbri"/><path class="iasbg5lvo"/>`,
		"fallback": "energy-icons:temperature-48",
	});
}

export default Component;
