import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oualg3bdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oualg3bdg"/>`,
		"fallback": "selfhst:librespeed-light",
	});
}

export default Component;
