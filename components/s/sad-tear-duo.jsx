import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/g/gp2_crdpn.css';
import '../../css/b/be3q1er6d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="gp2_crdpn"/><path class="be3q1er6d"/></g>`,
		"fallback": "glyphs:sad-tear-duo",
	});
}

export default Component;
