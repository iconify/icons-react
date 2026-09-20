import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4k-61htt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4k-61htt"/>`,
		"fallback": "selfhst:max-light",
	});
}

export default Component;
