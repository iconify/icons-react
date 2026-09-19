import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cgdlnt7gm.css';
import '../../css/d/d3p0atbag.css';
import '../../css/r/r-77_6bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cgdlnt7gm"/><rect class="d3p0atbag"/><path class="r-77_6bxd"/></g>`,
		"fallback": "iconoir:microphone-plus-solid",
	});
}

export default Component;
