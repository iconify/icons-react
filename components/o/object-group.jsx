import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_ji3pbxg.css';
import '../../css/h/ho8edbc3c.css';
import '../../css/s/sn-zpk_rn.css';
import '../../css/t/tf2gnt7zz.css';
import '../../css/a/arzdbwblk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_ji3pbxg"/><path class="ho8edbc3c"/><path clip-rule="evenodd" class="sn-zpk_rn"/><path class="tf2gnt7zz"/><path class="arzdbwblk"/></g>`,
		"fallback": "glyphs-poly:object-group",
	});
}

export default Component;
