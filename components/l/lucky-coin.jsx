import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wtrv8b7py.css';
import '../../css/k/k1-zf16ki.css';
import '../../css/x/xv-f_kl2n.css';
import '../../css/q/q4fjqwbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wtrv8b7py"/><path class="k1-zf16ki wm-shine"/><path class="wm-k xv-f_kl2n"/><path class="q4fjqwbqj wm-a"/></g>`,
		"fallback": "withicons-kawaii:lucky-coin",
	});
}

export default Component;
