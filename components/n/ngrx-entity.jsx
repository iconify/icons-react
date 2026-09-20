import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3rifrbdc.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3rifrbdc"/>`,
		"fallback": "material-icon-theme:ngrx-entity",
	});
}

export default Component;
