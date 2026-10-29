import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t_ybcacpd.css';
import '../../css/w/w2j8fqp7t.css';
import '../../css/i/iepk79cqx.css';
import '../../css/e/elgqt-pai.css';
import '../../css/a/asuzht4uf.css';
import '../../css/n/nqq59vbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t_ybcacpd wm-deco"/><path class="w2j8fqp7t wm-deco"/><path class="iepk79cqx wm-k"/><path class="elgqt-pai wm-a"/><path class="asuzht4uf wm-k"/><path class="nqq59vbxv wm-a"/></g>`,
		"fallback": "withicons:swap-blueprint",
	});
}

export default Component;
