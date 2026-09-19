import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/r_dv08lvg.css';
import '../../css/j/j54835brq.css';
import '../../css/m/m8p9je9sb.css';
import '../../css/i/ieu4x_bor.css';
import '../../css/r/rp1vnt36c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="r_dv08lvg"/><path class="j54835brq"/><path class="m8p9je9sb"/><path class="ieu4x_bor"/><path class="rp1vnt36c"/></g>`,
		"fallback": "icon-park:intercom",
	});
}

export default Component;
