import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo5pkcblg.css';
import '../../css/k/k-4xfkbec.css';
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
		"content": `<path class="bo5pkcblg"/><path class="k-4xfkbec"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`,
		"fallback": "energy-icons:power-station-x-20",
	});
}

export default Component;
