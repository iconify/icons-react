import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ras2v3bml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ras2v3bml"/>`,
		"fallback": "selfhst:voxmedia-coral-dark",
	});
}

export default Component;
