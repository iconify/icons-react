import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4t77hbzd.css';
import '../../css/d/djucoz9_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4t77hbzd"/><path class="djucoz9_s"/>`,
		"fallback": "energy-icons:warming-stripes-48-bold",
	});
}

export default Component;
