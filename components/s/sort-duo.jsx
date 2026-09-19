import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smbdfgb2d.css';
import '../../css/a/ahowpd1gc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="smbdfgb2d"/><path class="ahowpd1gc"/></g>`,
		"fallback": "glyphs:sort-duo",
	});
}

export default Component;
