import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l1_acdb5e.css';
import '../../css/g/gwh8zbc3o.css';
import '../../css/a/af49crb6p.css';
import '../../css/s/s-vd_vx5x.css';
import '../../css/g/gjexcmflt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="l1_acdb5e"/><path class="gwh8zbc3o"/><path class="af49crb6p"/><path class="s-vd_vx5x"/><path class="gjexcmflt"/></g>`,
		"fallback": "streamline-plump-color:projector-screen",
	});
}

export default Component;
