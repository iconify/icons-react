import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gg4963rit.css';
import '../../css/y/y3tgw9b4u.css';
import '../../css/c/c8nsbsbjx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="gg4963rit"/><path class="y3tgw9b4u"/><path class="c8nsbsbjx"/></g>`,
		"fallback": "glyphs-poly:toolbox",
	});
}

export default Component;
