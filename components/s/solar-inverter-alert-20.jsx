import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxfeshb7a.css';
import '../../css/u/u8bokm_su.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxfeshb7a"/><path class="u8bokm_su"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:solar-inverter-alert-20",
	});
}

export default Component;
