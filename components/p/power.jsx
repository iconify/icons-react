import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od5v46b1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od5v46b1l"/>`,
		"fallback": "icon-park-outline:power",
	});
}

export default Component;
