import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtyxdbbya.css';
import '../../css/r/rmjcikbzx.css';
import '../../css/m/m7oicvota.css';
import '../../css/s/sp26dzxfl.css';
import '../../css/n/n2_41ebpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gtyxdbbya"/><path class="rmjcikbzx"/><path class="m7oicvota"/><path class="sp26dzxfl"/><path class="n2_41ebpn"/></g>`,
		"fallback": "iconaut:turtle",
	});
}

export default Component;
