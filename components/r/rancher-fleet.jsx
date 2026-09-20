import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twfeyencb.css';
import '../../css/h/hnsdbi_4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twfeyencb"/><path class="hnsdbi_4t"/>`,
		"fallback": "selfhst:rancher-fleet",
	});
}

export default Component;
