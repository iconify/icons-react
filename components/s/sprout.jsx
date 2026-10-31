import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/reiuk6b0f.css';
import '../../css/f/fxi00ibkw.css';
import '../../css/z/z-a4k4b8u.css';
import '../../css/w/wneoubc6n.css';
import '../../css/a/a5n0jybeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="reiuk6b0f"/><path class="fxi00ibkw wm-shine"/><path class="wm-k z-a4k4b8u"/><path class="wm-a wneoubc6n"/><path class="a5n0jybeg wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sprout",
	});
}

export default Component;
