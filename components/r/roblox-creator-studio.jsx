import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq1zcxy1w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq1zcxy1w"/>`,
		"fallback": "fa7-brands:roblox-creator-studio",
	});
}

export default Component;
