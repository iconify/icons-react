import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/i/ic-g_bbxa.css';
import '../../css/p/p9cvycb9x.css';
import '../../css/f/fedydmb9n.css';
import '../../css/j/jom1e-boz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="ic-g_bbxa"/><path class="p9cvycb9x"/><path class="fedydmb9n"/><path class="jom1e-boz"/></g>`,
		"fallback": "streamline-kameleon-color:towel",
	});
}

export default Component;
