import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvyoy6b_p.css';
import '../../css/y/yexim4dcc.css';
import '../../css/v/v-e4uvn7p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dvyoy6b_p"/><path class="yexim4dcc"/><path class="v-e4uvn7p"/></g>`,
		"fallback": "glyphs:ship-duo",
	});
}

export default Component;
