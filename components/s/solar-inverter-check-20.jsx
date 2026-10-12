import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxfeshb7a.css';
import '../../css/u/u8bokm_su.css';
import '../../css/m/mpk28w9ff.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxfeshb7a"/><path class="u8bokm_su"/><path class="mpk28w9ff"/>`,
		"fallback": "energy-icons:solar-inverter-check-20",
	});
}

export default Component;
