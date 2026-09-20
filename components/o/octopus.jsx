import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uop26jb3i.css';
import '../../css/x/xnivn9b3p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uop26jb3i"/><path class="xnivn9b3p"/></g>`,
		"fallback": "streamline:octopus",
	});
}

export default Component;
