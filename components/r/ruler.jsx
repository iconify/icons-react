import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/myfghlzko.css';
import '../../css/j/jq2lxvddl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="myfghlzko"/><path class="jq2lxvddl"/></g>`,
		"fallback": "glyphs-poly:ruler",
	});
}

export default Component;
