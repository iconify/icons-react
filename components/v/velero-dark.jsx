import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-bww5bmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-bww5bmd"/>`,
		"fallback": "selfhst:velero-dark",
	});
}

export default Component;
