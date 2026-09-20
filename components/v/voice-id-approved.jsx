import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjhyi0b-g.css';
import '../../css/p/pdxq4z1kh.css';
import '../../css/k/kfs04d_tu.css';
import '../../css/s/scc9sgk-v.css';
import '../../css/s/s4fazkb1x.css';
import '../../css/e/esvrclb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mjhyi0b-g"/><path class="pdxq4z1kh"/><path class="kfs04d_tu"/><path class="scc9sgk-v"/><path class="s4fazkb1x"/><path class="esvrclb6w"/></g>`,
		"fallback": "streamline-ultimate-color:voice-id-approved",
	});
}

export default Component;
