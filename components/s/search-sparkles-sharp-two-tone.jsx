import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l-f044bhm.css';
import '../../css/x/xqu6_yb3l.css';
import '../../css/p/phzlwbbpe.css';
import '../../css/s/sau7yld-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l-f044bhm"/><path class="xqu6_yb3l"/><path class="phzlwbbpe"/><path class="sau7yld-m"/></g>`,
		"fallback": "keyline-icons:search-sparkles-sharp-two-tone",
	});
}

export default Component;
