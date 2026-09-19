import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/savzzqkcr.css';
import '../../css/m/m51ssub5f.css';
import '../../css/x/xg046ujlu.css';
import '../../css/u/uxe2iccbg.css';
import '../../css/l/ltlzptgaz.css';
import '../../css/m/mji4icz4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="savzzqkcr"/><path class="m51ssub5f"/><path class="xg046ujlu"/><path class="uxe2iccbg"/><path class="ltlzptgaz"/><path class="mji4icz4n"/>`,
		"fallback": "fxemoji:oncomingbus",
	});
}

export default Component;
