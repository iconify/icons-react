import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vicm532xg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vicm532xg"/>`,
		"fallback": "selfhst:opentalk-light",
	});
}

export default Component;
