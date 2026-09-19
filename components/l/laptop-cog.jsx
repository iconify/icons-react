import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmeuf3gzy.css';
import '../../css/t/tvc4p7bak.css';
import '../../css/h/hiq63pbvw.css';
import '../../css/d/dtjpj4b_n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gmeuf3gzy"/><path clip-rule="evenodd" class="tvc4p7bak"/><path clip-rule="evenodd" class="hiq63pbvw"/><path class="dtjpj4b_n"/></g>`,
		"fallback": "glyphs-poly:laptop-cog",
	});
}

export default Component;
