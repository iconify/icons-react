import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/i/i6-20-b6o.css';
import '../../css/g/gpy5opbyj.css';
import '../../css/a/aonm-8qcs.css';
import '../../css/x/xiv5klbfn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="i6-20-b6o"/><path class="gpy5opbyj"/><path class="aonm-8qcs"/><path class="xiv5klbfn"/></g>`,
		"fallback": "glyphs:rolling-eyes-duo",
	});
}

export default Component;
