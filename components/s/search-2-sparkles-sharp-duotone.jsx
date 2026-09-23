import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y3p5e-t4j.css';
import '../../css/m/ml1scxbze.css';
import '../../css/l/lo1lpdqfm.css';
import '../../css/s/sau7yld-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y3p5e-t4j"/><path class="ml1scxbze"/><path class="lo1lpdqfm"/><path class="sau7yld-m"/></g>`,
		"fallback": "keyline-icons:search-2-sparkles-sharp-duotone",
	});
}

export default Component;
