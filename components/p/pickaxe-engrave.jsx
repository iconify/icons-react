import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k0bsypceh.css';
import '../../css/j/jy-19hy_m.css';
import '../../css/c/cpi78nbym.css';
import '../../css/x/x-m_43jif.css';
import '../../css/u/urjdred5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k0bsypceh wm-k"/><path class="jy-19hy_m wm-a"/><path class="cpi78nbym wm-shadow"/><path class="wm-k x-m_43jif"/><path class="urjdred5d wm-a"/></g>`,
		"fallback": "withicons:pickaxe-engrave",
	});
}

export default Component;
