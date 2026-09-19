import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gglhxpbss.css';
import '../../css/j/jmec2jscz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gglhxpbss"/><path class="jmec2jscz"/>`,
		"fallback": "eva:stop-circle-fill",
	});
}

export default Component;
