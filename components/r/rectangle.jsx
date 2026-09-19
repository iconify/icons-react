import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fqu4l84ar.css';
import '../../css/u/uo25yfbxi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="fqu4l84ar"/><rect class="uo25yfbxi"/></g>`,
		"fallback": "glyphs-poly:rectangle",
	});
}

export default Component;
