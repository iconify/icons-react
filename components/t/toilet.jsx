import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpn0phb5b.css';
import '../../css/q/q7z_bo_ba.css';
import '../../css/l/lbqhoqruw.css';
import '../../css/f/f-w1ufbmx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpn0phb5b"/><circle class="q7z_bo_ba"/><circle class="lbqhoqruw"/><path class="f-w1ufbmx"/>`,
		"fallback": "map:toilet",
	});
}

export default Component;
