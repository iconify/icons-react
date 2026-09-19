import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf5fmya5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf5fmya5m"/>`,
		"fallback": "icon-park-outline:pennant",
	});
}

export default Component;
