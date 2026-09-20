import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilvr2qb2b.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilvr2qb2b"/>`,
		"fallback": "material-icon-theme:ngrx-actions",
	});
}

export default Component;
