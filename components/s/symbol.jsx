import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cakg9fd0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cakg9fd0c"/>`,
		"fallback": "icon-park:symbol",
	});
}

export default Component;
