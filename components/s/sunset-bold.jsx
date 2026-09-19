import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lu4k41tds.css';
import '../../css/o/o-ri9ache.css';
import '../../css/k/kj4rhbcdr.css';
import '../../css/x/xi853ztyj.css';
import '../../css/q/qmwsm3bul.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lu4k41tds"/><path class="o-ri9ache"/><path class="kj4rhbcdr"/><path class="xi853ztyj"/><path class="qmwsm3bul"/></g>`,
		"fallback": "glyphs:sunset-bold",
	});
}

export default Component;
