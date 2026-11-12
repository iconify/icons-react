import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5sc99b2m.css';
import '../../css/p/p424nxype.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5sc99b2m"/><path class="p424nxype"/>`,
		"fallback": "selfhst:spooty-dark",
	});
}

export default Component;
