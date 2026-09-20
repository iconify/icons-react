import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2e0vabgs.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2e0vabgs"/>`,
		"fallback": "material-icon-theme:ngrx-reducer",
	});
}

export default Component;
