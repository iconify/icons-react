import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/una0qyech.css';
import '../../css/g/gzmmb_5vu.css';
import '../../css/x/x5dd3rcaj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="una0qyech"/><path class="gzmmb_5vu"/><path class="x5dd3rcaj"/>`,
		"fallback": "energy-icons:quote-48-bold",
	});
}

export default Component;
