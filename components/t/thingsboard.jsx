import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmz-0lb0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmz-0lb0j"/>`,
		"fallback": "selfhst:thingsboard",
	});
}

export default Component;
