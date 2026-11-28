import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/df_igmx4m.css';
import '../../css/d/d-f_kel6u.css';
import '../../css/x/xxgdw-btn.css';
import '../../css/q/qy38zdwvn.css';
import '../../css/l/lw51043_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="df_igmx4m"/><path class="d-f_kel6u"/><path class="xxgdw-btn"/><path class="qy38zdwvn"/><path class="lw51043_f"/></g>`,
		"fallback": "iconaut:waveform-low",
	});
}

export default Component;
