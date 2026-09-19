import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvhpxbc1d.css';
import '../../css/k/k0soy3mpv.css';
import '../../css/u/ua7h0o40v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xvhpxbc1d"/><path class="k0soy3mpv"/><circle class="ua7h0o40v"/></g>`,
		"fallback": "icon-park-outline:wallet-one",
	});
}

export default Component;
