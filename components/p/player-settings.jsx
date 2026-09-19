import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd74rzbhx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd74rzbhx"/>`,
		"fallback": "fluent-mdl2:player-settings",
	});
}

export default Component;
