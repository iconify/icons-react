import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdh71-7os.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdh71-7os"/>`,
		"fallback": "selfhst:openshift-dark",
	});
}

export default Component;
