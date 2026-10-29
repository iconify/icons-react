import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ija1yx6op.css';
import '../../css/u/ulpf4zb8i.css';
import '../../css/x/xiqtpub3n.css';
import '../../css/v/vw6ac2bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ija1yx6op wm-deco"/><path class="ulpf4zb8i wm-deco"/><path class="wm-deco xiqtpub3n"/><path class="vw6ac2bkt"/></g>`,
		"fallback": "withicons:usb-blueprint",
	});
}

export default Component;
