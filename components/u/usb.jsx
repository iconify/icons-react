import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzddwfbgx.css';
import '../../css/l/lk0h3ab3p.css';
import '../../css/a/al49_fc3o.css';
import '../../css/x/xxkaztb6n.css';
import '../../css/y/y0gylub8e.css';
import '../../css/z/zuisxgi4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k zzddwfbgx"/><path class="lk0h3ab3p wm-deco"/><path class="al49_fc3o wm-k"/><path class="wm-shadow xxkaztb6n"/><path class="wm-shine y0gylub8e"/><path class="wm-shine zuisxgi4w"/></g>`,
		"fallback": "withicons-valentine:usb",
	});
}

export default Component;
