import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by3dv2b5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by3dv2b5k"/>`,
		"fallback": "selfhst:tubehaus-dark",
	});
}

export default Component;
