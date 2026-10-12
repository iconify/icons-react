import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdet1bgca.css';
import '../../css/r/rlpnqsbdy.css';
import '../../css/g/gxe3u81da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cdet1bgca"/><path class="rlpnqsbdy"/><path class="gxe3u81da"/></g>`,
		"fallback": "lucide-extended:mountain-snow-duotone",
	});
}

export default Component;
