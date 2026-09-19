import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/ld30g871v.css';
import '../../css/y/ywa5aqr7m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ld30g871v"/><path class="ywa5aqr7m"/></g>`,
		"fallback": "glyphs-poly:map-marker-2",
	});
}

export default Component;
