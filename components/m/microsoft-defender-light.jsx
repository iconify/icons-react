import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybuk2yvcd.css';
import '../../css/m/m9lolpbrw.css';
import '../../css/q/qdyu2hbul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybuk2yvcd"/><path class="m9lolpbrw"/><path class="qdyu2hbul"/>`,
		"fallback": "selfhst:microsoft-defender-light",
	});
}

export default Component;
