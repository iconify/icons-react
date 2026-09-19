import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbi0r-y8h.css';
import '../../css/n/ne4t_uv8b.css';
import '../../css/g/geasmbcqt.css';
import '../../css/t/tgw_nb89p.css';
import '../../css/g/ggx3qtb-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbi0r-y8h"/><circle class="ne4t_uv8b"/><path class="geasmbcqt"/><path class="tgw_nb89p"/><path class="ggx3qtb-x"/>`,
		"fallback": "fxemoji:rightmagnifyingglass",
	});
}

export default Component;
