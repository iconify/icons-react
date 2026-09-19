import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl3476bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl3476bnb"/>`,
		"fallback": "iconoir:remove-keyframe-alt",
	});
}

export default Component;
