import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fvusi9b2s.css';
import '../../css/t/t7xats91v.css';
import '../../css/t/tmvik6b9t.css';
import '../../css/t/tumfx356i.css';
import '../../css/m/mk7_fccwz.css';
import '../../css/b/bd6g4qb6r.css';
import '../../css/y/y7bo20bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fvusi9b2s"/><path class="t7xats91v"/><path class="tmvik6b9t wm-shine"/><path class="tumfx356i wm-k"/><path class="mk7_fccwz wm-a"/><path class="bd6g4qb6r"/><path class="y7bo20bex"/></g>`,
		"fallback": "withicons-kawaii:thumbs-up",
	});
}

export default Component;
