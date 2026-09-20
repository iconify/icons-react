import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk7o0ccjj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk7o0ccjj"/>`,
		"fallback": "material-icon-theme:label",
	});
}

export default Component;
