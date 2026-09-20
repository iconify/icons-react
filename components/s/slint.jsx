import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/senz0-dsw.css';
import '../../css/b/bwz9z8l8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="senz0-dsw"/><path class="bwz9z8l8m"/>`,
		"fallback": "material-icon-theme:slint",
	});
}

export default Component;
