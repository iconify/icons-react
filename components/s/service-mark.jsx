import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynhhlqb6o.css';
import '../../css/j/jbls2nr5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ynhhlqb6o"/><path class="jbls2nr5x"/>`,
		"fallback": "flat-color-icons:service-mark",
	});
}

export default Component;
