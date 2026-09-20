import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9sf_nobs.css';

const viewBox = {"width":200,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9sf_nobs"/>`,
		"fallback": "material-icon-theme:stylus",
	});
}

export default Component;
