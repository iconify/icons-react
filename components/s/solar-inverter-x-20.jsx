import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxfeshb7a.css';
import '../../css/u/u8bokm_su.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/m/mxz5qbb3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxfeshb7a"/><path class="u8bokm_su"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`,
		"fallback": "energy-icons:solar-inverter-x-20",
	});
}

export default Component;
