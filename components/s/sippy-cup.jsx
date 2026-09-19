import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz8pd-b6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz8pd-b6l"/>`,
		"fallback": "icon-park-outline:sippy-cup",
	});
}

export default Component;
