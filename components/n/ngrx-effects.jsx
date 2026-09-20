import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2bkmibuy.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2bkmibuy"/>`,
		"fallback": "material-icon-theme:ngrx-effects",
	});
}

export default Component;
