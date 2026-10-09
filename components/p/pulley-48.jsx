import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laln8oblt.css';
import '../../css/x/xteoxsbph.css';
import '../../css/g/gx31rr5qz.css';
import '../../css/m/m_4rsw5yb.css';
import '../../css/w/wf9cdiyzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laln8oblt"/><path class="xteoxsbph"/><path class="gx31rr5qz"/><path class="m_4rsw5yb"/><path class="wf9cdiyzs"/>`,
		"fallback": "energy-icons:pulley-48",
	});
}

export default Component;
