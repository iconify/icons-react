import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9i0j_jez.css';

const viewBox = {"width":200,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9i0j_jez"/>`,
		"fallback": "material-icon-theme:sentry",
	});
}

export default Component;
