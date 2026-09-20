import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcyv-xb1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcyv-xb1f"/>`,
		"fallback": "selfhst:paperless-ngx-dark",
	});
}

export default Component;
