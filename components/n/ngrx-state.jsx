import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6_1r758o.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6_1r758o"/>`,
		"fallback": "material-icon-theme:ngrx-state",
	});
}

export default Component;
