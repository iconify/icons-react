import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v24ulvjer.css';

const viewBox = {"width":260,"height":260};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v24ulvjer"/>`,
		"fallback": "material-icon-theme:odin",
	});
}

export default Component;
