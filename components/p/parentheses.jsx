import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v-6eycb-t.css';
import '../../css/p/ph03dzrjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v-6eycb-t"/><path class="ph03dzrjf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:parentheses",
	});
}

export default Component;
