import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmir9_bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmir9_bsm"/>`,
		"fallback": "thesvg:juce",
	});
}

export default Component;
