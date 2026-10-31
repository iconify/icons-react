import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k0l633lzq.css';
import '../../css/p/pcvtdcbzi.css';
import '../../css/z/z4dxnbbml.css';
import '../../css/d/dx_i7nbqp.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="k0l633lzq"/><path class="pcvtdcbzi wm-shine"/><path class="wm-k z4dxnbbml"/><path class="dx_i7nbqp wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:switch-camera",
	});
}

export default Component;
