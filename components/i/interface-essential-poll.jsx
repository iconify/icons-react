import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olc3e_b1f.css';
import '../../css/x/xdvj_qs2e.css';
import '../../css/l/lv0o3p4mv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olc3e_b1f"/><path class="xdvj_qs2e"/><path class="lv0o3p4mv"/>`,
		"fallback": "streamline-pixel:interface-essential-poll",
	});
}

export default Component;
