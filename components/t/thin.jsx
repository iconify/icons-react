import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfo1oe55t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfo1oe55t"/>`,
		"fallback": "icon-park-outline:thin",
	});
}

export default Component;
