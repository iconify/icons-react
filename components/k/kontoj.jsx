import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agda5ibxs.css';
import '../../css/n/nfv5mkb1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agda5ibxs"/><path class="nfv5mkb1f"/>`,
		"fallback": "selfhst:kontoj",
	});
}

export default Component;
