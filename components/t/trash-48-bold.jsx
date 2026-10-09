import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcwfyf16x.css';
import '../../css/s/s5tz5x6dr.css';
import '../../css/u/ueeyhi2_o.css';
import '../../css/g/gwc7-sbdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcwfyf16x"/><path class="s5tz5x6dr"/><path class="ueeyhi2_o"/><path class="gwc7-sbdf"/>`,
		"fallback": "energy-icons:trash-48-bold",
	});
}

export default Component;
