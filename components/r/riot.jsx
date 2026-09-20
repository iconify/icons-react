import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnolvzexl.css';
import '../../css/a/ag8wbubia.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnolvzexl"/><path class="ag8wbubia"/>`,
		"fallback": "material-icon-theme:riot",
	});
}

export default Component;
