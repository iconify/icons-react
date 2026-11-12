import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lljgh4k1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lljgh4k1v"/>`,
		"fallback": "selfhst:microsoft-outlook-2018-dark",
	});
}

export default Component;
