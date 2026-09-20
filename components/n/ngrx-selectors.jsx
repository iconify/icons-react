import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knujnsb_z.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knujnsb_z"/>`,
		"fallback": "material-icon-theme:ngrx-selectors",
	});
}

export default Component;
