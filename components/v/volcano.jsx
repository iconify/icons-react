import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alg3v_bpk.css';
import '../../css/n/nhjwueb5c.css';
import '../../css/q/qyfdo2-1a.css';
import '../../css/g/g5315p_8e.css';
import '../../css/k/k1hf748ii.css';
import '../../css/m/mpraqnb0o.css';
import '../../css/k/knh7ywanv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="alg3v_bpk"/><path class="nhjwueb5c"/><path class="qyfdo2-1a"/><path class="g5315p_8e"/><path class="k1hf748ii"/><path class="mpraqnb0o"/><path class="knh7ywanv"/></g>`,
		"fallback": "fluent-emoji-flat:volcano",
	});
}

export default Component;
