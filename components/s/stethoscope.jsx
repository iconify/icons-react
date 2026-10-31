import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/voujwhdvp.css';
import '../../css/b/bf12tmbdf.css';
import '../../css/a/af32xdjgp.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="voujwhdvp"/><path class="bf12tmbdf"/><path class="af32xdjgp"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:stethoscope",
	});
}

export default Component;
